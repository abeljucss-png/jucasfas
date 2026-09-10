import React, { useEffect } from 'react';
import { ArrowRight, Check, ExternalLink, ShieldCheck } from 'lucide-react';
import { getRelatedArticles, buildSeoData } from './seoLibrary';
import './seo-article.css';

const FAQ = [
  ['Vale a pena comprar?', 'Pode valer a pena quando o produto resolve uma necessidade recorrente. Antes de decidir, compare uso previsto, espaço, manutenção, garantia e custo total, e não apenas o preço anunciado.'],
  ['Como escolher a melhor opção?', 'Comece pelo seu uso real. Depois compare características que mudam a experiência, limitações, assistência, garantia e condições da oferta.'],
  ['Qual opção é melhor para iniciantes?', 'Para quem está começando, normalmente faz mais sentido priorizar facilidade de uso, ajustes, segurança, manutenção simples e recursos que realmente serão utilizados.'],
  ['Qual é a principal diferença entre as opções?', 'As diferenças relevantes dependem da categoria, mas costumam envolver construção, recursos, dimensões, desempenho, ergonomia, acessórios e suporte.'],
  ['O preço mais baixo é sempre melhor?', 'Não. Um preço menor pode deixar de ser vantagem se a construção, a durabilidade, a garantia ou os recursos não atenderem ao uso previsto.'],
  ['Onde conferir o preço atualizado?', 'A oferta pode mudar por loja, período e disponibilidade. Quando houver link comercial no artigo, confira a página final antes de concluir a compra.']
];

function Schema({ article }) {
  useEffect(() => {
    const id = 'seo-article-schema';
    document.getElementById(id)?.remove();
    const related = getRelatedArticles(article, 4);
    const graph = [
      { '@type':'Article', headline:article.title, description:article.description, url:article.canonical, dateModified:'2026-09-10', author:{'@type':'Organization',name:'Equipe Opinião Real',url:'https://opiniaoreal.com/autor/equipe-opiniao-real'}, publisher:{'@type':'Organization',name:'Opinião Real',url:'https://opiniaoreal.com/'}, mainEntityOfPage:{'@type':'WebPage','@id':article.canonical} },
      { '@type':'BreadcrumbList', itemListElement:[
        {'@type':'ListItem',position:1,name:'Início',item:'https://opiniaoreal.com/'},
        {'@type':'ListItem',position:2,name:article.category,item:`https://opiniaoreal.com/${article.category==='Fitness em Casa'?'fitness':article.category==='Ferramentas'?'ferramentas':'casa'}`},
        {'@type':'ListItem',position:3,name:article.title,item:article.canonical}
      ] },
      { '@type':'FAQPage', mainEntity:FAQ.map(([name,text])=>({'@type':'Question',name,acceptedAnswer:{'@type':'Answer',text}})) },
      { '@type':'ItemList', name:'Conteúdos relacionados', itemListElement:related.map((item,index)=>({'@type':'ListItem',position:index+1,url:`https://opiniaoreal.com/${item.slug}`,name:item.title})) }
    ];
    const node=document.createElement('script'); node.id=id; node.type='application/ld+json'; node.textContent=JSON.stringify({'@context':'https://schema.org','@graph':graph}); document.head.appendChild(node);
    return ()=>document.getElementById(id)?.remove();
  },[article]);
  return null;
}

function Comparison({ article }) {
  const rows = article.category==='Fitness em Casa'
    ? [['Uso ocasional','Recursos essenciais','Compra simples','Rotina leve'],['Uso frequente','Mais ajustes e estabilidade','Conforto e construção','Treino recorrente'],['Uso intenso','Construção mais robusta','Desempenho e suporte','Maior exigência']]
    : article.category==='Ferramentas'
      ? [['Pequenos reparos','Kit enxuto','Facilidade de armazenamento','Uso doméstico'],['Uso frequente','Mais recursos','Ergonomia e autonomia','Maior variedade de tarefas'],['Uso profissional','Linha compatível','Robustez e assistência','Alta frequência']]
      : [['Espaço reduzido','Medidas compactas','Armazenamento fácil','Ambientes pequenos'],['Uso diário','Praticidade e durabilidade','Limpeza simples','Rotina intensa'],['Maior demanda','Mais capacidade','Construção e suporte','Uso recorrente']];
  return <div className="seoTableWrap"><table><thead><tr><th>Perfil</th><th>Principais características</th><th>Pontos fortes</th><th>Indicação</th></tr></thead><tbody>{rows.map(row=><tr key={row[0]}>{row.map((cell,i)=><td key={i}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function ArticleSections({ article }) {
  const isFitness=article.category==='Fitness em Casa';
  const isTools=article.category==='Ferramentas';
  const topic=article.keyword;
  const practical = isFitness
    ? 'Imagine uma rotina de treino em casa três ou quatro vezes por semana: nesse cenário, estabilidade, conforto e facilidade de guardar o equipamento tendem a pesar mais do que uma longa lista de recursos pouco usados.'
    : isTools
      ? 'Pense em uma tarefa comum, como instalar uma prateleira ou ajustar um móvel. A melhor ferramenta é a que combina capacidade suficiente, controle e ergonomia, sem transformar uma tarefa simples em uma compra exagerada.'
      : 'Pense no espaço onde o produto será usado. Medidas, acesso, armazenamento e frequência de uso costumam explicar melhor uma boa compra do que uma lista extensa de funcionalidades.';
  return <>
    <section><h2>O que você precisa analisar antes de comprar</h2><p>Quem pesquisa por <strong>{topic}</strong> geralmente já sabe o que quer comprar, mas ainda tem uma dúvida mais importante: qual opção faz sentido para o próprio uso. A resposta começa separando recursos realmente úteis de características que apenas parecem interessantes na descrição.</p><p>{practical}</p><h3>Comece pelo cenário de uso</h3><p>Defina onde o produto será utilizado, com que frequência e por quanto tempo. Também vale observar quem vai usar, quanto espaço está disponível e se haverá necessidade de guardar, transportar ou limpar o item depois de cada utilização.</p></section>
    <section><h2>Principais características que fazem diferença</h2><div className="seoCriteria"><article><span>01</span><h3>Construção</h3><p>Observe materiais, estabilidade, acabamento e informações técnicas fornecidas pela marca. Características verificáveis são mais úteis do que adjetivos de marketing.</p></article><article><span>02</span><h3>Praticidade</h3><p>Veja como é o armazenamento, a montagem, os ajustes e a manutenção. Um produto excelente no papel pode ser inconveniente se não couber na rotina.</p></article><article><span>03</span><h3>Recursos</h3><p>Compare somente funções relacionadas ao seu objetivo. Mais recursos não significam automaticamente uma compra melhor.</p></article><article><span>04</span><h3>Suporte</h3><p>Confira garantia, assistência, peças e orientações oficiais. Esse conjunto ajuda a estimar o custo e o risco da compra no longo prazo.</p></article></div></section>
    <section><h2>Vantagens e possíveis limitações</h2><div className="seoProsCons"><div><h3><Check size={17}/> Pontos positivos</h3><ul><li>Pode facilitar uma necessidade recorrente quando o modelo é compatível com o uso.</li><li>Comparar características antes da compra reduz escolhas baseadas apenas em aparência ou preço.</li><li>Uma compra adequada tende a ser mais útil quando considera espaço, frequência e manutenção.</li></ul></div><div><h3>− Pontos de atenção</h3><ul><li>Preço e disponibilidade podem mudar entre lojas e ao longo do tempo.</li><li>Especificações anunciadas precisam ser conferidas na fonte antes da publicação de uma recomendação.</li><li>Nem todo recurso adicional terá utilidade para todos os perfis.</li></ul></div></div></section>
    <section><h2>Comparativo por perfil de uso</h2><p>Em vez de criar um ranking artificial sem dados comerciais conferidos, esta comparação mostra como a decisão muda conforme a necessidade. Quando modelos reais forem validados editorialmente, eles podem ocupar essas posições sem alterar a estrutura.</p><Comparison article={article}/></section>
    <section><h2>Como é usar no dia a dia?</h2><p>A experiência cotidiana depende menos da quantidade de especificações e mais da combinação entre ergonomia, praticidade e adequação ao ambiente. Antes de comprar, vale imaginar o caminho completo: receber, montar, usar, limpar, guardar e manter.</p><p>Para uma avaliação responsável, o Opinião Real não transforma avaliações públicas em uma experiência própria. Comentários de consumidores podem indicar padrões e pontos de atenção, mas devem ser tratados como evidência complementar e não como teste realizado pela equipe.</p><div className="seoNote"><ShieldCheck size={19}/><p><strong>Critério editorial:</strong> não atribuímos testes físicos, notas, medições ou experiências que não tenham sido realizados ou verificados.</p></div></section>
    <section><h2>Para quem é indicado e para quem não é</h2><div className="seoAudience"><div><h3>Faz sentido para quem</h3><p>Tem uma necessidade clara, conhece o espaço disponível, pretende usar o produto com frequência compatível e aceita comparar preço, garantia e características antes de decidir.</p></div><div><h3>Pode não fazer sentido para quem</h3><p>A compra é apenas por impulso, não existe espaço adequado ou a pessoa procura um recurso que o produto não foi projetado para oferecer.</p></div></div></section>
  </>;
}

export default function SeoArticlePage({ article }) {
  const data=buildSeoData(article); const related=getRelatedArticles(article,4);
  useEffect(()=>{document.title=data.metaTitle; const desc=document.querySelector('meta[name="description"]')||document.head.appendChild(Object.assign(document.createElement('meta'),{name:'description'})); desc.content=data.description; let canonical=document.querySelector('link[rel="canonical"]'); if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.appendChild(canonical)} canonical.href=data.canonical;},[data]);
  return <main className="seoArticlePage"><Schema article={data}/><div className="seoArticleShell"><p className="seoBreadcrumb"><a href="/">Início</a><span>/</span><a href={data.category==='Fitness em Casa'?'/fitness':data.category==='Ferramentas'?'/ferramentas':'/casa'}>{data.category}</a><span>/</span>{data.title}</p><header className="seoArticleHero"><p className="eyebrow">{data.category.toUpperCase()} · GUIA DE COMPRA</p><h1>{data.title}</h1><p className="seoLead">{data.description}</p><div className="seoMeta"><span>Palavra-chave principal: {data.keyword}</span><span>Conteúdo revisado em 10/09/2026</span></div></header>
  <section className="seoQuick"><div><p className="eyebrow">RESUMO DA ANÁLISE</p><h2>Antes de decidir</h2></div><div className="seoQuickGrid"><div><strong>Melhor escolha</strong><span>Equilíbrio entre uso, qualidade e suporte.</span></div><div><strong>Melhor custo-benefício</strong><span>Entrega adequada sem pagar por recursos desnecessários.</span></div><div><strong>Melhor para iniciantes</strong><span>Facilidade de uso, ajustes e manutenção simples.</span></div><div><strong>Melhor para espaços pequenos</strong><span>Medidas, armazenamento e praticidade em primeiro lugar.</span></div></div></section>
  <p className="seoIntro">Pesquisar <strong>{data.keyword}</strong> costuma começar com uma lista de opções e terminar com uma dúvida: qual delas realmente vale a pena para o meu caso? Este guia organiza os critérios que ajudam nessa decisão, sem transformar especificações não verificadas em promessas. A ideia é facilitar a comparação e deixar claro o que ainda precisa ser conferido antes do clique.</p>
  <ArticleSections article={data}/>
  <section><h2>Perguntas frequentes</h2><div className="seoFaq">{FAQ.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
  <section className="seoConclusion"><p className="eyebrow">DECISÃO FINAL</p><h2>Qual escolher?</h2><p>A melhor escolha é aquela que atende ao seu cenário sem exigir recursos que você não pretende usar. Compare características verificáveis, condições de garantia, preço atual e reputação da oferta antes de fechar a compra.</p><div className="seoDecision"><div><strong>Melhor opção geral</strong><span>Priorize equilíbrio e adequação ao uso.</span></div><div><strong>Melhor custo-benefício</strong><span>Procure valor no conjunto, não somente o menor preço.</span></div><div><strong>Opção econômica</strong><span>Reduza recursos sem abrir mão do essencial.</span></div></div><a className="primary seoCta" href={isCommercial(data)?'/melhores-bicicletas-spinning':'/guias-de-compra'}>{isCommercial(data)?'Veja o preço atualizado':'Leia nossos guias de compra'} <ArrowRight size={17}/></a></section>
  <section className="seoRelated"><p className="eyebrow">CONTINUE LENDO</p><h2>Veja também</h2>{related.map(item=><a href={`/${item.slug}`} key={item.slug}><div><span>{item.category}</span><strong>{item.title}</strong></div><ArrowRight size={17}/></a>)}</section>
  <div className="seoDisclosure"><ShieldCheck size={19}/><p><strong>Transparência:</strong> alguns links comerciais do Opinião Real podem gerar comissão, sem custo adicional para o leitor. Isso não altera os critérios editoriais.</p></div>
  </div></main>;
}

function isCommercial(article){ return article.category==='Fitness em Casa' || article.category==='Ferramentas'; }
