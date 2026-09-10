<?php
/**
 * Opinião Real: idempotent content importer.
 * Run once from WP-CLI: wp eval-file wordpress-theme/opiniao-real/inc/class-or-content-importer.php
 * Or call OR_Content_Importer::run() from a trusted admin-only integration.
 */
if (!defined('ABSPATH') && !defined('WP_CLI')) { exit; }

class OR_Content_Importer {
    private static function categories() {
        return array(
            'fitness' => array('name'=>'Fitness em Casa','description'=>'Análises, comparativos e guias dos melhores equipamentos fitness para treinar em casa.','children'=>array('bicicletas-spinning','esteiras','academia-em-casa')),
            'ferramentas' => array('name'=>'Ferramentas','description'=>'Guias e comparativos das melhores ferramentas para uso doméstico e profissional.','children'=>array('parafusadeiras','kits-de-ferramentas','ferramentas-sem-fio')),
            'casa' => array('name'=>'Casa e Utilidades','description'=>'Produtos inteligentes, organizadores e utilidades que facilitam a rotina da casa.','children'=>array())
        );
    }

    private static function articles() {
        return array(
            array('slug'=>'melhores-bicicletas-spinning','title'=>'Melhores Bicicletas Spinning para Casa em 2026: Guia Completo','cat'=>'fitness','type'=>'review','kw'=>'melhores bicicletas spinning','meta'=>'Compare bicicletas spinning para casa por estabilidade, ajustes, resistência, conforto e espaço antes de comprar.','focus'=>'melhores bicicletas spinning','image'=>'Melhores bicicletas spinning para casa'),
            array('slug'=>'bicicleta-spinning-vale-a-pena','title'=>'Bicicleta Spinning Vale a Pena? Veja Vantagens e Desvantagens','cat'=>'fitness','type'=>'guide','kw'=>'bicicleta spinning vale a pena','meta'=>'Entenda quando a bicicleta spinning vale a pena, suas vantagens, limitações e os critérios para escolher um modelo para casa.','focus'=>'bicicleta spinning vale a pena','image'=>'Bicicleta spinning para treino em casa'),
            array('slug'=>'bicicleta-spinning-para-apartamento-como-escolher','title'=>'Melhor Bicicleta Spinning para Apartamento: Como Escolher','cat'=>'fitness','type'=>'guide','kw'=>'bicicleta spinning para apartamento','meta'=>'Saiba como avaliar espaço, ruído, vibração, estabilidade, transporte e ajustes ao escolher uma spinning para apartamento.','focus'=>'bicicleta spinning para apartamento','image'=>'Bicicleta spinning compacta para apartamento'),
            array('slug'=>'bicicleta-spinning-emagrece','title'=>'Bicicleta Spinning Emagrece? Entenda os Benefícios','cat'=>'fitness','type'=>'guide','kw'=>'bicicleta spinning emagrece','meta'=>'Veja como a bicicleta spinning pode participar de uma rotina de atividade física e quais fatores influenciam o emagrecimento.','focus'=>'bicicleta spinning emagrece','image'=>'Pessoa treinando em bicicleta spinning'),
            array('slug'=>'bicicleta-spinning-profissional-ou-residencial','title'=>'Bicicleta Spinning Profissional ou Residencial: Qual Escolher?','cat'=>'fitness','type'=>'comparison','kw'=>'bicicleta spinning profissional ou residencial','meta'=>'Entenda as diferenças entre bicicletas spinning profissionais e residenciais e escolha conforme frequência, espaço e objetivo.','focus'=>'bicicleta spinning profissional ou residencial','image'=>'Bicicleta spinning profissional e residencial'),
            array('slug'=>'melhores-esteiras-ergometricas-dobraveis','title'=>'Melhores Esteiras Ergométricas Dobráveis para Casa','cat'=>'fitness','type'=>'review','kw'=>'melhores esteiras ergométricas dobráveis','meta'=>'Guia para comparar esteiras dobráveis por espaço, capacidade, velocidade, recursos, segurança e manutenção.','focus'=>'melhores esteiras ergométricas dobráveis','image'=>'Esteira ergométrica dobrável em casa'),
            array('slug'=>'esteira-ergometrica-vale-a-pena','title'=>'Esteira Ergométrica Vale a Pena?','cat'=>'fitness','type'=>'guide','kw'=>'esteira ergométrica vale a pena','meta'=>'Descubra quando uma esteira ergométrica vale a pena, seus pontos fortes, limitações e cuidados antes da compra.','focus'=>'esteira ergométrica vale a pena','image'=>'Esteira ergométrica para treino residencial'),
            array('slug'=>'melhores-equipamentos-para-academia-em-casa','title'=>'Melhores Equipamentos para Montar Academia em Casa','cat'=>'fitness','type'=>'review','kw'=>'melhores equipamentos para academia em casa','meta'=>'Veja como montar uma academia em casa priorizando equipamentos versáteis, espaço, segurança e frequência de uso.','focus'=>'melhores equipamentos para academia em casa','image'=>'Academia doméstica compacta'),
            array('slug'=>'academia-em-casa-quais-equipamentos-comprar-primeiro','title'=>'Academia em Casa: Quais Equipamentos Comprar Primeiro?','cat'=>'fitness','type'=>'guide','kw'=>'academia em casa quais equipamentos comprar primeiro','meta'=>'Aprenda a priorizar equipamentos para academia em casa sem gastar com itens que não combinam com sua rotina.','focus'=>'academia em casa quais equipamentos comprar primeiro','image'=>'Equipamentos para academia em casa'),
            array('slug'=>'bicicleta-spinning-ou-esteira','title'=>'Bicicleta Spinning ou Esteira: Qual Escolher?','cat'=>'fitness','type'=>'comparison','kw'=>'bicicleta spinning ou esteira','meta'=>'Compare bicicleta spinning e esteira por tipo de exercício, espaço, rotina, manutenção e perfil de usuário.','focus'=>'bicicleta spinning ou esteira','image'=>'Bicicleta spinning e esteira lado a lado'),
            array('slug'=>'melhores-kits-de-ferramentas-para-casa','title'=>'Melhores Kits de Ferramentas para Casa em 2026','cat'=>'ferramentas','type'=>'review','kw'=>'melhores kits de ferramentas para casa','meta'=>'Guia para escolher kits de ferramentas para casa considerando variedade, qualidade, organização e tarefas mais comuns.','focus'=>'melhores kits de ferramentas para casa','image'=>'Kit de ferramentas organizado para casa'),
            array('slug'=>'kit-de-ferramentas-vale-a-pena','title'=>'Kit de Ferramentas Vale a Pena?','cat'=>'ferramentas','type'=>'guide','kw'=>'kit de ferramentas vale a pena','meta'=>'Saiba quando comprar um kit de ferramentas faz sentido e como evitar pagar por peças que você não vai usar.','focus'=>'kit de ferramentas vale a pena','image'=>'Kit de ferramentas doméstico'),
            array('slug'=>'melhores-parafusadeiras-sem-fio','title'=>'Melhores Parafusadeiras sem Fio','cat'=>'ferramentas','type'=>'review','kw'=>'melhores parafusadeiras sem fio','meta'=>'Veja os critérios para comparar parafusadeiras sem fio: torque, bateria, mandril, ergonomia, carregamento e acessórios.','focus'=>'melhores parafusadeiras sem fio','image'=>'Parafusadeira sem fio para pequenos reparos'),
            array('slug'=>'parafusadeira-ou-furadeira','title'=>'Parafusadeira ou Furadeira: Qual Comprar?','cat'=>'ferramentas','type'=>'comparison','kw'=>'parafusadeira ou furadeira','meta'=>'Entenda a diferença entre parafusadeira e furadeira e descubra qual ferramenta atende melhor cada tipo de tarefa.','focus'=>'parafusadeira ou furadeira','image'=>'Parafusadeira e furadeira comparadas'),
            array('slug'=>'ferramentas-essenciais-para-ter-em-casa','title'=>'Ferramentas Essenciais para Ter em Casa','cat'=>'ferramentas','type'=>'guide','kw'=>'ferramentas essenciais para ter em casa','meta'=>'Monte uma caixa de ferramentas doméstica com peças realmente úteis para pequenos reparos e manutenção cotidiana.','focus'=>'ferramentas essenciais para ter em casa','image'=>'Ferramentas essenciais para casa'),
            array('slug'=>'melhores-marcas-de-ferramentas','title'=>'Melhores Marcas de Ferramentas','cat'=>'ferramentas','type'=>'guide','kw'=>'melhores marcas de ferramentas','meta'=>'Saiba como avaliar marcas de ferramentas por linha de produtos, assistência, garantia, disponibilidade e adequação ao uso.','focus'=>'melhores marcas de ferramentas','image'=>'Ferramentas de diferentes categorias'),
            array('slug'=>'kit-ferramentas-profissional-ou-domestico','title'=>'Kit Ferramentas Profissional ou Doméstico?','cat'=>'ferramentas','type'=>'comparison','kw'=>'kit ferramentas profissional ou doméstico','meta'=>'Compare kits profissionais e domésticos por frequência de uso, variedade, resistência, organização e custo-benefício.','focus'=>'kit ferramentas profissional ou doméstico','image'=>'Kit de ferramentas profissional e doméstico'),
            array('slug'=>'ferramentas-sem-fio-vale-a-pena','title'=>'Ferramentas sem Fio Vale a Pena?','cat'=>'ferramentas','type'=>'guide','kw'=>'ferramentas sem fio vale a pena','meta'=>'Entenda as vantagens e limitações de ferramentas sem fio e veja quando bateria e mobilidade fazem diferença.','focus'=>'ferramentas sem fio vale a pena','image'=>'Ferramentas sem fio com bateria'),
            array('slug'=>'como-escolher-uma-parafusadeira','title'=>'Como Escolher uma Parafusadeira?','cat'=>'ferramentas','type'=>'guide','kw'=>'como escolher uma parafusadeira','meta'=>'Aprenda a escolher uma parafusadeira observando torque, controle, bateria, mandril, ergonomia e acessórios.','focus'=>'como escolher uma parafusadeira','image'=>'Detalhe de uma parafusadeira sem fio'),
            array('slug'=>'melhores-ferramentas-para-pequenos-reparos','title'=>'Melhores Ferramentas para Pequenos Reparos','cat'=>'ferramentas','type'=>'review','kw'=>'melhores ferramentas para pequenos reparos','meta'=>'Conheça as categorias de ferramentas mais úteis para pequenos reparos e como montar um conjunto equilibrado.','focus'=>'melhores ferramentas para pequenos reparos','image'=>'Ferramentas para pequenos reparos domésticos'),
            array('slug'=>'melhores-produtos-para-organizar-a-casa','title'=>'Melhores Produtos para Organizar a Casa','cat'=>'casa','type'=>'review','kw'=>'melhores produtos para organizar a casa','meta'=>'Guia de organizadores para cozinha, quarto, banheiro e áreas pequenas, com foco em função, medidas e rotina.','focus'=>'melhores produtos para organizar a casa','image'=>'Organizadores domésticos em ambiente clean'),
            array('slug'=>'produtos-que-facilitam-a-rotina-domestica','title'=>'Produtos que Facilitam a Rotina Doméstica','cat'=>'casa','type'=>'guide','kw'=>'produtos que facilitam a rotina doméstica','meta'=>'Veja categorias de produtos que podem simplificar tarefas domésticas e como avaliar utilidade antes de comprar.','focus'=>'produtos que facilitam a rotina doméstica','image'=>'Produtos úteis para rotina doméstica'),
            array('slug'=>'melhores-eletroportateis-para-casa','title'=>'Melhores Eletroportáteis para Casa','cat'=>'casa','type'=>'review','kw'=>'melhores eletroportáteis para casa','meta'=>'Como escolher eletroportáteis por função, frequência de uso, espaço, limpeza, consumo e facilidade de armazenamento.','focus'=>'melhores eletroportáteis para casa','image'=>'Eletroportáteis modernos para cozinha'),
            array('slug'=>'produtos-uteis-que-valem-a-pena-comprar','title'=>'Produtos Úteis que Valem a Pena Comprar','cat'=>'casa','type'=>'guide','kw'=>'produtos úteis que valem a pena comprar','meta'=>'Aprenda a separar produtos realmente úteis de compras por impulso usando necessidade, frequência e espaço como critérios.','focus'=>'produtos úteis que valem a pena comprar','image'=>'Seleção de produtos úteis para casa'),
            array('slug'=>'como-escolher-produtos-para-pequenos-espacos','title'=>'Como Escolher Produtos para Pequenos Espaços','cat'=>'casa','type'=>'guide','kw'=>'como escolher produtos para pequenos espaços','meta'=>'Veja como medir, comparar dimensões e escolher produtos funcionais para apartamentos e ambientes compactos.','focus'=>'como escolher produtos para pequenos espaços','image'=>'Ambiente compacto organizado'),
            array('slug'=>'melhores-organizadores-para-casa','title'=>'Melhores Organizadores para Casa','cat'=>'casa','type'=>'review','kw'=>'melhores organizadores para casa','meta'=>'Compare organizadores por ambiente, capacidade, acesso, material, limpeza e aproveitamento do espaço.','focus'=>'melhores organizadores para casa','image'=>'Organizadores para diferentes ambientes'),
            array('slug'=>'produtos-inteligentes-para-casa','title'=>'Produtos Inteligentes para Casa','cat'=>'casa','type'=>'guide','kw'=>'produtos inteligentes para casa','meta'=>'Entenda quais categorias de produtos inteligentes podem facilitar a rotina e o que avaliar em compatibilidade e privacidade.','focus'=>'produtos inteligentes para casa','image'=>'Casa conectada com dispositivos inteligentes'),
            array('slug'=>'itens-essenciais-para-casa-nova','title'=>'Itens Essenciais para Casa Nova','cat'=>'casa','type'=>'guide','kw'=>'itens essenciais para casa nova','meta'=>'Checklist racional para equipar uma casa nova por prioridade, frequência de uso, orçamento e espaço disponível.','focus'=>'itens essenciais para casa nova','image'=>'Casa nova organizada e funcional'),
            array('slug'=>'melhores-produtos-custo-beneficio-para-casa','title'=>'Melhores Produtos Custo-Benefício para Casa','cat'=>'casa','type'=>'review','kw'=>'melhores produtos custo-benefício para casa','meta'=>'Aprenda a avaliar custo-benefício em produtos para casa sem confundir preço baixo com boa compra.','focus'=>'melhores produtos custo-benefício para casa','image'=>'Produtos domésticos com foco em custo-benefício'),
            array('slug'=>'compras-para-casa-que-realmente-valem-a-pena','title'=>'Compras para Casa que Realmente Valem a Pena','cat'=>'casa','type'=>'guide','kw'=>'compras para casa que realmente valem a pena','meta'=>'Critérios para decidir quais compras para casa resolvem problemas reais e quais podem esperar.','focus'=>'compras para casa que realmente valem a pena','image'=>'Casa funcional com produtos essenciais')
        );
    }

    private static function faq($a) {
        $topic = $a['kw'];
        return array(
            array('q'=>'Como escolher '.$topic.'?','a'=>'Comece pelo uso real, espaço disponível e frequência. Depois compare características que mudam a experiência, garantia, assistência e custo total.'),
            array('q'=>'Preço mais baixo significa melhor custo-benefício?','a'=>'Não. Custo-benefício considera o que o produto entrega para o uso pretendido, incluindo durabilidade esperada, recursos necessários, manutenção e suporte.'),
            array('q'=>'Como saber se uma característica é realmente importante?','a'=>'Relacione a característica a uma necessidade concreta. Se ela não muda o uso que você fará do produto, provavelmente não deve ser o principal critério.'),
            array('q'=>'Vale comprar sem conferir as medidas?','a'=>'Não. Dimensões e espaço de circulação podem determinar se o produto será confortável e funcional no ambiente.'),
            array('q'=>'Onde conferir preço e especificações?','a'=>'Use a página oficial do fabricante e varejistas confiáveis. Preços, disponibilidade e condições comerciais mudam e devem ser conferidos no momento da compra.')
        );
    }

    private static function body($a) {
        $isComparison = $a['type']==='comparison';
        $isReview = $a['type']==='review';
        $related = array_slice(array_filter(self::articles(), function($x) use ($a){ return $x['cat']===$a['cat'] && $x['slug']!==$a['slug']; }),0,3);
        $md = '# '.esc_html($a['title'])."\n\n";
        $md .= '## Introdução' . "\n\n";
        $md .= 'Escolher **'.$a['kw'].'** exige mais do que olhar para uma lista de recursos. O produto precisa fazer sentido para a rotina, o espaço disponível, a frequência de uso e o orçamento. Este guia organiza os critérios que realmente ajudam a comparar opções, sem transformar especificações isoladas em promessas de desempenho.' . "\n\n";
        $md .= 'A Opinião Real prioriza informações que podem ser verificadas. Quando preço, disponibilidade, capacidade ou especificação dependem do modelo, esses dados devem ser conferidos na fonte antes da publicação ou da compra.' . "\n\n";
        $md .= "## Resumo rápido\n\n- **Melhor escolha:** a opção que melhor atende ao objetivo e aos critérios essenciais do usuário.\n- **Melhor custo-benefício:** equilíbrio entre recursos necessários, qualidade, suporte e preço real no momento da compra.\n- **Melhor alternativa:** opção adequada a um perfil ou restrição diferente.\n\n";
        $md .= "## O que analisar antes de comprar\n\n";
        $criteria = $a['cat']==='fitness' ? array('estabilidade e construção','ajustes e ergonomia','dimensões e espaço','frequência e intensidade de uso','manutenção, garantia e assistência') : ($a['cat']==='ferramentas' ? array('potência ou capacidade adequada à tarefa','ergonomia e controle','bateria, acessórios e compatibilidade quando aplicável','organização e armazenamento','garantia e assistência') : array('função e frequência de uso','medidas e aproveitamento do espaço','material, limpeza e manutenção','facilidade de uso e armazenamento','garantia e custo total'));
        foreach($criteria as $i=>$c){ $md .= '### '.($i+1).'. '.ucfirst($c)."\n\n"; $md .= 'Este critério deve ser avaliado em relação ao uso pretendido. Uma especificação só é relevante quando altera segurança, conforto, produtividade, praticidade ou durabilidade para aquele perfil de usuário.' . "\n\n"; }
        if($isComparison){ $md .= "## Comparação por perfil\n\n| Perfil | Prioridade | Atenção |\n|---|---|---|\n| Uso ocasional | Simplicidade e adequação | Evitar recursos sem utilidade |\n| Uso frequente | Construção, conforto e suporte | Conferir manutenção |\n| Espaço reduzido | Dimensões e armazenamento | Medir antes de comprar |\n| Uso compartilhado | Regulagem e versatilidade | Conferir limites do fabricante |\n\n"; }
        if($isReview){ $md .= "## Análise dos produtos\n\nNesta categoria, a análise individual deve usar modelos reais cadastrados no WordPress, com nome oficial, fonte, ficha técnica conferida, pontos positivos, pontos negativos e link comercial rastreável. Nenhum preço, nota, teste ou especificação é inventado pelo importador.\n\n### Como interpretar a ficha técnica\n\nCompare primeiro as características que afetam o uso. Recursos extras entram depois. Se duas opções atendem ao mesmo objetivo, considere também garantia, assistência, acessórios, manutenção e facilidade de encontrar peças ou consumíveis quando aplicável.\n\n"; }
        $md .= "## Pontos positivos\n\n- Ajuda a transformar uma compra genérica em uma decisão baseada no uso.\n- Facilita a comparação entre modelos e categorias.\n- Permite priorizar características realmente relevantes.\n- Reduz a chance de pagar por recursos que não serão utilizados.\n\n## Pontos de atenção\n\n- Preços e disponibilidade mudam com o tempo.\n- Fichas técnicas podem variar entre versões e vendedores.\n- Uma mesma categoria pode atender perfis muito diferentes.\n- Desempenho real não deve ser afirmado sem fonte ou teste documentado.\n\n";
        $md .= "## Como escolher\n\n1. Defina a tarefa ou objetivo principal.\n2. Liste as características indispensáveis.\n3. Meça o espaço quando houver dimensão física envolvida.\n4. Compare pelo menos duas alternativas com fontes verificáveis.\n5. Confira garantia, assistência e condições de compra.\n6. Verifique preço e disponibilidade no momento do clique.\n\n";
        $md .= "## Uso no dia a dia\n\nO melhor produto é aquele que continua fazendo sentido depois da compra. Pense onde ele ficará, quem vai usar, com que frequência será utilizado e como será limpo, guardado ou mantido. Siga sempre o manual do fabricante e as orientações de segurança aplicáveis.\n\n";
        $md .= "## Modelos recomendados\n\nOs modelos comerciais desta seção devem ser cadastrados no WordPress com dados verificados. O importador deixa a estrutura editorial pronta, mas não cria avaliações, preços ou links de afiliado fictícios.\n\n";
        $md .= "## FAQ\n\n";
        foreach(self::faq($a) as $f){ $md .= '### '.esc_html($f['q'])."\n\n".$f['a']."\n\n"; }
        $md .= "## Conclusão\n\nNão existe uma escolha universal. Para decidir melhor, combine objetivo, espaço, frequência, características essenciais, suporte e preço atualizado. A Opinião Real recomenda comparar dados verificáveis e revisar as condições comerciais antes do clique final.\n\n";
        $md .= '### Veja também' . "\n\n";
        foreach($related as $r){ $md .= '- ['.esc_html($r['title']).'](/'.$r['slug'].')\n'; }
        $md .= "\n> **Transparência:** a Opinião Real pode receber comissão por links de afiliados. Isso não altera os critérios editoriais. Preços, disponibilidade e condições devem ser conferidos na página do anunciante.\n";
        return $md;
    }

    private static function svg($a) {
        $title = esc_html($a['image']);
        $cat = strtoupper($a['cat']==='fitness'?'FITNESS EM CASA':($a['cat']==='ferramentas'?'FERRAMENTAS':'CASA E UTILIDADES'));
        return '<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000"><rect width="1600" height="1000" fill="#F6F8FB"/><rect x="90" y="90" width="1420" height="820" rx="42" fill="#EEF3F8"/><circle cx="1280" cy="250" r="180" fill="#294D75" opacity=".12"/><circle cx="1420" cy="740" r="220" fill="#C98B3C" opacity=".13"/><rect x="170" y="170" width="120" height="8" rx="4" fill="#C98B3C"/><text x="170" y="245" font-family="Arial,sans-serif" font-size="28" font-weight="700" letter-spacing="5" fill="#294D75">'.$cat.'</text><text x="170" y="410" font-family="Georgia,serif" font-size="66" font-weight="700" fill="#0B1F3A">'.$title.'</text><text x="170" y="500" font-family="Arial,sans-serif" font-size="28" fill="#667085">Opinião Real • Análises honestas para ajudar você a comprar melhor.</text><rect x="170" y="610" width="410" height="72" rx="36" fill="#0B1F3A"/><text x="215" y="657" font-family="Arial,sans-serif" font-size="24" font-weight="700" fill="#FFFFFF">GUIA EDITORIAL 2026</text></svg>';
    }

    private static function image($a,$post_id) {
        $filename = sanitize_title($a['slug']).'.svg';
        $upload = wp_upload_dir(); $path = trailingslashit($upload['path']).$filename;
        if(!file_exists($path)) file_put_contents($path,self::svg($a));
        $url = trailingslashit($upload['url']).$filename;
        $existing = get_posts(array('post_type'=>'attachment','post_status'=>'inherit','meta_key'=>'_or_import_slug','meta_value'=>$a['slug'],'numberposts'=>1,'fields'=>'ids'));
        if($existing) { set_post_thumbnail($post_id,$existing[0]); return $existing[0]; }
        $att = array('post_mime_type'=>'image/svg+xml','post_title'=>$a['image'],'post_content'=>'','post_status'=>'inherit');
        $id = wp_insert_attachment($att,$path,$post_id);
        if($id && !is_wp_error($id)){ require_once ABSPATH.'wp-admin/includes/image.php'; update_post_meta($id,'_or_import_slug',$a['slug']); update_post_meta($id,'_wp_attachment_image_alt',$a['image']); wp_update_attachment_metadata($id,wp_generate_attachment_metadata($id,$path)); set_post_thumbnail($post_id,$id); }
        return $id;
    }

    public static function run() {
        foreach(self::categories() as $slug=>$c){
            $term=term_exists($slug,'category'); if(!$term) $term=wp_insert_term($c['name'],'category',array('slug'=>$slug,'description'=>$c['description']));
            if(!is_wp_error($term)){ $tid=(int)(is_array($term)?$term['term_id']:$term); wp_update_term($tid,'category',array('description'=>$c['description'])); }
            foreach($c['children'] as $child){ $name=ucwords(str_replace('-',' ',$child)); $exists=term_exists($child,'category'); if(!$exists) wp_insert_term($name,'category',array('slug'=>$child,'parent'=>isset($tid)?$tid:0)); }
        }
        foreach(self::articles() as $a){
            $post=get_page_by_path($a['slug'],OBJECT,'seo_article');
            $data=array('post_title'=>$a['title'],'post_name'=>$a['slug'],'post_content'=>self::body($a),'post_excerpt'=>$a['meta'],'post_status'=>'publish','post_type'=>'seo_article','comment_status'=>'closed');
            if($post) { $data['ID']=$post->ID; $id=wp_update_post($data,true); } else { $id=wp_insert_post($data,true); }
            if(is_wp_error($id)) continue;
            $cat=term_exists($a['cat'],'category'); if($cat) wp_set_post_categories($id,array((int)(is_array($cat)?$cat['term_id']:$cat)));
            update_post_meta($id,'_rank_math_focus_keyword',$a['focus']); update_post_meta($id,'_rank_math_title',$a['title'].' | Opinião Real'); update_post_meta($id,'_rank_math_description',$a['meta']); update_post_meta($id,'_rank_math_canonical_url',home_url('/'.$a['slug'].'/')); update_post_meta($id,'_or_content_type',$a['type']); update_post_meta($id,'_or_author','Equipe Opinião Real');
            self::image($a,$id);
        }
        foreach(array(array('melhores-bicicletas-spinning','Melhores Bicicletas Spinning','fitness'),array('melhores-ferramentas','Melhores Ferramentas','ferramentas'),array('melhores-produtos-casa','Melhores Produtos para Casa','casa')) as $p){
            $post=get_page_by_path($p[0],OBJECT,'page'); $content='<h2>Encontre recomendações por critérios</h2><p>Compare opções, características e pontos de atenção antes de comprar. Os dados comerciais devem ser atualizados a partir de fontes verificáveis.</p><h2>Como escolher</h2><p>Defina seu objetivo, compare características essenciais, confira medidas e verifique preço, garantia e assistência antes da decisão.</p><p><strong>Transparência:</strong> alguns links podem ser de afiliados.</p>';
            $data=array('post_title'=>$p[1],'post_name'=>$p[0],'post_content'=>$content,'post_status'=>'publish','post_type'=>'page'); if($post){$data['ID']=$post->ID;$id=wp_update_post($data,true);}else{$id=wp_insert_post($data,true);} if(!is_wp_error($id)){update_post_meta($id,'_rank_math_title',$p[1].' | Opinião Real');update_post_meta($id,'_rank_math_description','Comparativos e recomendações honestas para ajudar você a escolher melhor.');}
        }
        return true;
    }
}

if(defined('WP_CLI') && WP_CLI){ WP_CLI::add_command('opiniao-real import-content',function(){ OR_Content_Importer::run(); WP_CLI::success('Conteúdo Opinião Real importado/atualizado.'); }); }
