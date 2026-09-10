import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, BarChart3, Check, ChevronDown, ExternalLink, FileText, Menu, Search, ShieldCheck, Target, X } from 'lucide-react';
import './styles.css';

const ML_SEARCH = 'https://lista.mercadolivre.com.br/bicicleta-spinning';

const categories = [
  { name: 'Fitness em Casa', slug: 'fitness', items: ['Bicicletas spinning', 'Esteiras', 'Equipamentos de treino'], icon: '01' },
  { name: 'Ferramentas', slug: 'ferramentas', items: ['Kits de ferramentas', 'Parafusadeiras', 'Ferramentas sem fio'], icon: '02' },
  { name: 'Casa e Utilidades', slug: 'casa', items: ['Produtos úteis', 'Organização', 'Equipamentos domésticos'], icon: '03' }
];

const guides = [
  { title: 'Melhores bicicletas spinning para casa em 2026', slug: 'melhores-bicicletas-spinning', category: 'Fitness em Casa', text: 'Compare estrutura, ajustes, resistência e espaço antes de escolher.', accent: 'fitness' },
  { title: 'Melhores esteiras dobráveis para casa', slug: 'melhores-esteiras-dobraveis', category: 'Fitness em Casa', text: 'O que analisar em uma esteira compacta para treinar em casa.', accent: 'treadmill' },
  { title: 'Melhores kits de ferramentas sem fio', slug: 'melhores-kits-ferramentas', category: 'Ferramentas', text: 'Compare versatilidade, bateria, acessórios e praticidade.', accent: 'tools' }
];

const productSlots = [
  { id: 'produto-1', name: 'Modelo a definir', indication: 'Melhor escolha geral', summary: 'Espaço reservado para o modelo que apresentar o melhor conjunto de características após a análise dos dados reais.', pros: ['Dados reais a inserir', 'Especificações a conferir', 'Comparação editorial'], cons: ['Informações a conferir', 'Oferta a consultar'], weight: 'A conferir', resources: 'A conferir', level: 'A conferir' },
  { id: 'produto-2', name: 'Modelo a definir', indication: 'Melhor custo-benefício', summary: 'Espaço reservado para comparar um modelo equilibrado em recursos, construção e preço praticado no momento da análise.', pros: ['Dados reais a inserir', 'Especificações a conferir', 'Comparação editorial'], cons: ['Informações a conferir', 'Oferta a consultar'], weight: 'A conferir', resources: 'A conferir', level: 'A conferir' },
  { id: 'produto-3', name: 'Modelo a definir', indication: 'Melhor para apartamento', summary: 'Espaço reservado para um modelo adequado quando tamanho, conforto e ruído são prioridades.', pros: ['Dados reais a inserir', 'Especificações a conferir', 'Comparação editorial'], cons: ['Informações a conferir', 'Oferta a consultar'], weight: 'A conferir', resources: 'A conferir', level: 'A conferir' }
];

const faqItems = [
  ['Bicicleta spinning emagrece?', 'Pode contribuir para o gasto energético e para uma rotina de atividade física. Os resultados dependem da intensidade, frequência, alimentação e de outros fatores individuais.'],
  ['Bicicleta spinning faz muito barulho?', 'O nível de ruído varia conforme o sistema de resistência, transmissão, montagem e manutenção. Para ambientes compartilhados, vale priorizar modelos com funcionamento mais silencioso e conferir avaliações de compradores.'],
  ['Qual bicicleta spinning é melhor para apartamento?', 'Não existe um único modelo universalmente melhor. Para apartamento, compare principalmente dimensões, estabilidade, ruído, conforto e facilidade de movimentação.'],
  ['Quanto tempo usar bicicleta spinning por dia?', 'Isso depende do condicionamento, objetivo e orientação profissional. Para quem está começando, é mais importante aumentar a duração e a intensidade gradualmente do que perseguir um tempo fixo.'],
  ['Vale a pena comprar bicicleta spinning para casa?', 'Pode valer a pena para quem pretende treinar com frequência e tem espaço adequado. Antes da compra, compare construção, ajustes, resistência, conforto, garantia e custo total.']
];

function goTo(setPage, page) {
  const path = page === 'home' ? '/' : `/${page}`;
  window.history.pushState({}, '', path);
  setPage(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function Seo({ title, description, canonical, type = 'WebPage', faq = [] }) {
  useEffect(() => {
    document.title = title;
    const setMeta = (name, content) => {
      let el = document.head.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute('name', name); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };
    setMeta('description', description);
    setMeta('robots', 'index,follow');
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = canonical;

    const old = document.getElementById('route-schema');
    if (old) old.remove();
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': type === 'Article' ? 'Article' : 'WebPage', headline: title, name: title, description, url: canonical, isPartOf: { '@type': 'WebSite', name: 'Opinião Real', url: 'https://opiniaoreal.com/' } },
        { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Início', item: 'https://opiniaoreal.com/' }, { '@type': 'ListItem', position: 2, name: 'Fitness em Casa', item: 'https://opiniaoreal.com/fitness' }, { '@type': 'ListItem', position: 3, name: 'Bicicletas spinning', item: canonical }] }
      ]
    };
    if (faq.length) schema['@graph'].push({ '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
    const script = document.createElement('script'); script.id = 'route-schema'; script.type = 'application/ld+json'; script.textContent = JSON.stringify(schema); document.head.appendChild(script);
    return () => { const current = document.getElementById('route-schema'); if (current) current.remove(); };
  }, [title, description, canonical, type, faq]);
  return null;
}

function Header({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const go = p => { goTo(setPage, p); setOpen(false); };
  return <header className="header"><div className="wrap nav"><button className="brand" onClick={() => go('home')} aria-label="Ir para o início"><span className="brandMark">OR</span><span>Opinião <b>Real</b></span></button><nav className={open ? 'mobileOpen' : ''}>{[['Início', 'home'], ['Fitness', 'fitness'], ['Ferramentas', 'ferramentas'], ['Casa', 'casa'], ['Comparativos', 'compare'], ['Sobre Nós', 'about']].map(([label, p]) => <button key={p} className={page === p ? 'active' : ''} onClick={() => go(p)}>{label}</button>)}</nav><button className="menu" onClick={() => setOpen(v => !v)} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X /> : <Menu />}</button></div></header>;
}

function Hero({ setPage }) {
  return <section className="hero"><div className="wrap heroGrid"><div><p className="eyebrow">GUIA DE COMPRA • 2026</p><h1>Melhores Bicicletas Spinning para Casa em 2026</h1><p className="lead">Analisamos modelos, características, avaliações de consumidores e custo-benefício para ajudar você a escolher a bicicleta spinning ideal.</p><a className="primary" href="#ranking">Ver modelos recomendados <ArrowRight size={18} /></a><div className="trust"><ShieldCheck size={19} /><span>Critérios claros, transparência comercial e sem avaliações inventadas.</span></div></div><div className="heroVisual"><div className="visualLabel">ANÁLISE EM FOCO</div><div className="bikeIllustration" aria-hidden="true"><div className="bikeWheel one"/><div className="bikeWheel two"/><div className="bikeFrame f1"/><div className="bikeFrame f2"/><div className="bikeFrame f3"/><div className="bikeSeat"/><div className="bikeHandle"/></div><div className="heroNote"><Target size={18} /><span>Compare antes de comprar</span></div></div></div></section>;
}

function QuickChoice() {
  return <section className="quickChoice" aria-label="Escolha rápida"><div><span>ESCOLHA RÁPIDA</span><h2>Comece pelo seu perfil</h2></div><div className="quickItems"><div><b>01</b><strong>Melhor escolha geral</strong><small>Definida após comparar os dados reais dos modelos.</small></div><div><b>02</b><strong>Melhor custo-benefício</strong><small>Equilíbrio entre recursos, construção e preço.</small></div><div><b>03</b><strong>Melhor para apartamento</strong><small>Foco em dimensões, estabilidade e ruído.</small></div></div></section>;
}

function ProductImage({ label }) {
  return <div className="productImage"><div className="productPlaceholder"><span>IMAGEM DO PRODUTO</span><b>{label}</b><small>A inserir com dados reais</small></div></div>;
}

function Ranking({ setPage }) {
  return <section className="rankingSection" id="ranking"><div className="sectionHead"><div><p className="eyebrow">COMPARATIVO</p><h2>Ranking das melhores bicicletas spinning</h2><p>Os espaços abaixo estão estruturados para receber modelos reais, com especificações e links de oferta conferidos antes da publicação.</p></div></div><div className="productGrid">{productSlots.map((product, index) => <article className="productCard" key={product.id}><ProductImage label={`Modelo ${index + 1}`} /><div className="productCardBody"><span className="rankLabel">0{index + 1} • {product.indication}</span><h3>{product.name}</h3><p>{product.summary}</p><div className="pros"><b>Pontos positivos</b>{product.pros.map(x => <span key={x}><Check size={14} />{x}</span>)}</div><div className="cons"><b>Pontos negativos</b>{product.cons.map(x => <span key={x}>− {x}</span>)}</div><a className="cardCta" href={ML_SEARCH} target="_blank" rel="noopener noreferrer">Ver preço atualizado <ExternalLink size={15} /></a></div></article>)}</div></section>;
}

function ComparisonTable() {
  return <section className="comparisonSection"><div className="sectionHead"><div><p className="eyebrow">DECISÃO LADO A LADO</p><h2>Tabela comparativa</h2></div><span>Dados reais devem ser conferidos antes da publicação.</span></div><div className="tableScroll"><table><thead><tr><th>Produto</th><th>Indicação</th><th>Peso suportado</th><th>Recursos</th><th>Nível de treino</th><th>Custo-benefício</th></tr></thead><tbody>{productSlots.map((p, i) => <tr key={p.id}><td><b>Modelo {i + 1}</b><small>{p.name}</small></td><td>{p.indication}</td><td>{p.weight}</td><td>{p.resources}</td><td>{p.level}</td><td>A conferir</td></tr>)}</tbody></table></div></section>;
}

function Method() {
  const items = [['Conforto', 'Banco, ajustes e posição de treino'], ['Construção', 'Estabilidade, estrutura e acabamento'], ['Recursos', 'Resistência, painel e regulagens'], ['Custo-benefício', 'Relação entre entrega e preço praticado']];
  return <section className="method"><div className="wrap methodGrid"><div><p className="eyebrow">CRITÉRIOS EDITORIAIS</p><h2>Como avaliamos as bicicletas spinning</h2><p className="lead">Analisamos os produtos considerando características técnicas, opiniões de compradores, custo-benefício e adequação para diferentes perfis de usuários.</p></div><div className="methodCards">{items.map(([title, text], i) => <div className="methodCard" key={title}><span>0{i + 1}</span><div><strong>{title}</strong><p>{text}</p></div><Check size={17} /></div>)}</div></div></section>;
}

function DetailProduct({ product, index }) {
  return <article className="detailProduct" id={product.id}><div className="detailVisual"><ProductImage label={`Modelo ${index + 1}`} /></div><div className="detailContent"><div className="detailTitle"><span>ANÁLISE {String(index + 1).padStart(2, '0')}</span><h3>{product.name}</h3><p>{product.indication}</p></div><p><b>Resumo:</b> {product.summary}</p><div className="proscons"><div><h4>Pontos positivos</h4>{product.pros.map(x => <p key={x}>+ {x}</p>)}</div><div><h4>Pontos negativos</h4>{product.cons.map(x => <p key={x}>− {x}</p>)}</div></div><p><b>Para quem é indicado:</b> {product.indication}. A indicação definitiva deve ser preenchida somente depois da conferência das especificações do modelo real.</p><p><b>Nossa opinião:</b> este bloco foi criado para registrar uma análise editorial baseada nos dados verificáveis do produto, sem atribuir características que ainda não foram confirmadas.</p><a className="primary" href={ML_SEARCH} target="_blank" rel="noopener noreferrer">Consultar oferta <ExternalLink size={16} /></a></div></article>;
}

function BuyingGuide() {
  const points = [['Roda de inércia', 'Ajuda a entender a sensação de pedalada e o comportamento do equipamento durante o exercício.'], ['Resistência', 'Compare o sistema de resistência e a possibilidade de ajuste para o nível de treino pretendido.'], ['Conforto do banco', 'Verifique formato, acolchoamento e principalmente as possibilidades de ajuste.'], ['Regulagens', 'Altura e posição do banco e do guidão podem fazer diferença na ergonomia.'], ['Espaço disponível', 'Confira largura, comprimento, altura e se o equipamento pode ser movimentado com facilidade.'], ['Peso suportado', 'Compare o limite informado pelo fabricante com o perfil de uso previsto.']];
  return <section className="buyingGuide"><p className="eyebrow">GUIA PRÁTICO</p><h2>Como escolher uma bicicleta spinning?</h2><p className="sectionIntro">A melhor compra começa pelo uso que você pretende fazer. Não escolha apenas pelo número de recursos: procure o conjunto que faz sentido para sua rotina.</p><div className="guideGrid">{points.map(([title, text], i) => <div key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>;
}

function FAQ() {
  return <section className="faqSection"><p className="eyebrow">DÚVIDAS FREQUENTES</p><h2>Perguntas frequentes</h2>{faqItems.map(([q, a]) => <FaqItem key={q} q={q} a={a} />)}</section>;
}
function FaqItem({ q, a }) { const [open, setOpen] = useState(false); return <div className="faqItem"><button onClick={() => setOpen(v => !v)} aria-expanded={open}><span>{q}</span>{open ? <X size={18} /> : <ChevronDown size={18} />}</button>{open && <p>{a}</p>}</div>; }

function Conclusion() {
  return <section className="conclusion"><p className="eyebrow">CONCLUSÃO</p><h2>Qual bicicleta spinning escolher?</h2><p className="sectionIntro">A resposta depende do seu objetivo. Use as categorias abaixo como orientação e confirme os dados do modelo antes de comprar.</p><div className="profileGrid"><div><span>PARA QUEM QUER TREINAR PESADO</span><h3>Priorize construção, estabilidade, resistência e ajustes.</h3><p>Escolha o modelo que apresentar o conjunto técnico mais adequado ao uso intenso, depois confirme o limite de peso e a garantia.</p></div><div><span>PARA APARTAMENTO</span><h3>Priorize dimensões, estabilidade e ruído.</h3><p>Compare o espaço ocupado e procure informações consistentes sobre funcionamento silencioso e movimentação do equipamento.</p></div><div><span>PARA CUSTO-BENEFÍCIO</span><h3>Compare o que você realmente vai usar.</h3><p>Um preço menor não significa necessariamente melhor compra. Relacione construção, recursos, ajustes, garantia e preço atual.</p></div></div><a className="primary finalCta" href={ML_SEARCH} target="_blank" rel="noopener noreferrer">Ver preço atualizado no Mercado Livre <ExternalLink size={17} /></a></section>;
}

function Review({ slug }) {
  const guide = guides.find(g => g.slug === slug) || guides[0];
  const isBike = slug === 'melhores-bicicletas-spinning';
  if (!isBike) return <GenericReview guide={guide} />;
  return <main className="reviewPage"><Seo title="Melhores Bicicletas Spinning para Casa em 2026 | Comparativo" description="Veja as melhores bicicletas spinning para casa, compare modelos, vantagens e escolha a opção ideal para seu treino." canonical="https://opiniaoreal.com/melhores-bicicletas-spinning" type="Article" faq={faqItems} /><div className="wrap narrow"><p className="crumb">Início <span>/</span> Fitness em Casa <span>/</span> Bicicletas spinning</p><p className="eyebrow">GUIA DE COMPRA • 2026</p><h1>Melhores Bicicletas Spinning para Casa em 2026: Guia Completo de Compra</h1><p className="reviewIntro">Analisamos modelos, características, avaliações de consumidores e custo-benefício para ajudar você a escolher a bicicleta spinning ideal.</p><div className="reviewMeta"><span>Por Opinião Real</span><span>•</span><span>Conteúdo editorial</span></div><QuickChoice /><a className="primary heroCta" href="#ranking">Ver modelos recomendados <ArrowRight size={17} /></a></div><div className="wrap contentWide"><Ranking /><ComparisonTable /><Method /></div><div className="wrap narrow"><section className="detailSection"><p className="eyebrow">ANÁLISE INDIVIDUAL</p><h2>Análise detalhada dos produtos</h2><p className="sectionIntro">Cada ficha abaixo foi preparada para receber informações verificáveis do modelo escolhido. Não atribuímos nota, avaliação de consumidor, preço ou especificação sem fonte conferida.</p>{productSlots.map((p, i) => <DetailProduct key={p.id} product={p} index={i} />)}</section><BuyingGuide /><FAQ /><Conclusion /><section className="affiliateNotice"><ShieldCheck size={20} /><p><b>Transparência:</b> alguns links desta página podem gerar comissão para o Opinião Real, sem custo adicional para você. Isso não altera os critérios editoriais.</p></section></div></main>;
}

function GenericReview({ guide }) { return <main className="simplePage"><Seo title={`${guide.title} | Opinião Real`} description={guide.text} canonical={`https://opiniaoreal.com/${guide.slug}`} /><div className="wrap narrow"><p className="crumb">Início <span>/</span> {guide.category}</p><p className="eyebrow">GUIA DE COMPRA • 2026</p><h1>{guide.title}</h1><p className="reviewIntro">{guide.text}</p><div className="infoBlock"><h2>Em construção editorial</h2><p>Esta página está estruturada para receber comparativos, análises individuais, FAQ e ofertas com dados verificáveis.</p></div></div></main>; }

function Home({ setPage }) { return <><Seo title="Opinião Real | Análises honestas para comprar melhor" description="Análises honestas, comparativos e guias de compra para ajudar você a comprar melhor." canonical="https://opiniaoreal.com/" /><Hero setPage={setPage} /><section className="section"><div className="wrap"><div className="sectionHead"><div><p className="eyebrow">EXplore</p><h2>Categorias principais</h2></div><p>Conteúdo organizado para encontrar a informação certa sem perder tempo.</p></div><div className="categories">{categories.map(c => <article className="category" key={c.slug} onClick={() => goTo(setPage, c.slug)} tabIndex="0"><span className="num">{c.icon}</span><h3>{c.name}</h3><ul>{c.items.map(i => <li key={i}>{i}<ArrowRight size={15} /></li>)}</ul></article>)}</div></div></section><section className="section soft"><div className="wrap"><div className="sectionHead"><div><p className="eyebrow">INTENÇÃO DE COMPRA</p><h2>Guias de compra mais populares</h2></div></div><div className="articles">{guides.map(a => <article className="articleCard" key={a.slug} onClick={() => goTo(setPage, a.slug)} tabIndex="0"><div className={`articleImage ${a.accent}`}><div className="miniProduct" /></div><div className="articleBody"><span>{a.category}</span><h3>{a.title}</h3><p>{a.text}</p><button>Ver guia <ArrowRight size={15} /></button></div></article>)}</div></div></section><Method /><section className="section"><div className="wrap confidence"><div><p className="eyebrow">NOSSO COMPROMISSO</p><h2>Por que confiar no Opinião Real</h2><p className="lead">Informação útil, clara e honesta para apoiar decisões de compra.</p></div><div className="benefits"><Benefit icon={<FileText />} title="Análises detalhadas" text="Contexto, especificações e pontos importantes." /><Benefit icon={<BarChart3 />} title="Comparações" text="Diferenças lado a lado para facilitar a decisão." /><Benefit icon={<Search />} title="Informações claras" text="Sem promessas exageradas ou linguagem complicada." /><Benefit icon={<ShieldCheck />} title="Transparência comercial" text="Indicamos quando um link pode gerar comissão." /></div></div></section></>; }
function Benefit({ icon, title, text }) { return <div className="benefit"><div className="benefitIcon">{icon}</div><div><h3>{title}</h3><p>{text}</p></div></div>; }
function MethodStandalone() { return <Method />; }
function Category({ slug, setPage }) { const c = categories.find(x => x.slug === slug) || categories[0]; const list = guides.filter(g => g.category === c.name); return <main className="simplePage categoryPage"><Seo title={`${c.name} | Opinião Real`} description={`Guias e comparativos de ${c.name.toLowerCase()} para ajudar você a comprar melhor.`} canonical={`https://opiniaoreal.com/${slug}`} /><div className="wrap"><p className="eyebrow">CATEGORIA</p><h1>{c.name}</h1><p className="reviewIntro">Guias e comparativos para ajudar você a encontrar produtos adequados ao seu uso.</p><div className="categoryGrid">{(list.length ? list : guides).map(g => <article className="articleCard" key={g.slug} onClick={() => goTo(setPage, g.slug)}><div className={`articleImage ${g.accent}`}><div className="miniProduct" /></div><div className="articleBody"><span>{g.category}</span><h3>{g.title}</h3><p>{g.text}</p><button>Ver guia <ArrowRight size={15} /></button></div></article>)}</div></div></main>; }
function Compare() { return <main className="simplePage"><Seo title="Comparativos | Opinião Real" description="Compare produtos lado a lado antes de comprar." canonical="https://opiniaoreal.com/compare" /><div className="wrap narrow"><p className="eyebrow">FERRAMENTA DE DECISÃO</p><h1>Compare produtos lado a lado</h1><p className="reviewIntro">Use critérios objetivos para entender as diferenças antes de abrir uma oferta.</p><a className="primary" href="/melhores-bicicletas-spinning">Comparar bicicletas spinning <ArrowRight size={17} /></a></div></main>; }
function About({ contact = false }) { return <main className="simplePage"><Seo title={contact ? 'Contato | Opinião Real' : 'Sobre Nós | Opinião Real'} description="Conheça o Opinião Real e nossos critérios editoriais." canonical={`https://opiniaoreal.com/${contact ? 'contact' : 'about'}`} /><div className="wrap narrow"><p className="eyebrow">OPINIÃO REAL</p><h1>{contact ? 'Entre em contato' : 'Informação para comprar melhor'}</h1><div className="infoBlock"><h2>{contact ? 'Fale conosco' : 'Quem somos'}</h2><p>{contact ? 'Para sugerir uma correção ou falar sobre o conteúdo, utilize os canais de contato disponibilizados pelo site.' : 'O Opinião Real nasceu para ajudar consumidores a tomar decisões melhores antes de comprar produtos online, transformando especificações e comparações em conteúdo claro.'}</p><h2>Independência e transparência</h2><p>Quando usamos links de parceiros, isso é informado de forma clara. Não inventamos avaliações, preços ou depoimentos para influenciar uma decisão.</p></div></div></main>; }
function Legal({ type }) { const data = { privacy: ['Política de Privacidade', 'Esta página apresenta as diretrizes gerais de privacidade do Opinião Real.'], terms: ['Termos de Uso', 'O conteúdo do Opinião Real tem caráter informativo. Preços, disponibilidade e especificações podem mudar.'], affiliate: ['Aviso de Afiliados', 'Alguns links presentes no site podem gerar comissão caso uma compra seja realizada, sem custo adicional para o usuário.'] }[type]; return <main className="simplePage"><Seo title={`${data[0]} | Opinião Real`} description={data[1]} canonical={`https://opiniaoreal.com/${type}`} /><div className="wrap narrow"><p className="eyebrow">INFORMAÇÕES LEGAIS</p><h1>{data[0]}</h1><p className="reviewIntro">{data[1]}</p><div className="infoBlock"><h2>Transparência</h2><p>Buscamos apresentar informações claras. Se você identificar algum erro ou tiver dúvida sobre um conteúdo, entre em contato.</p></div></div></main>; }
function Footer({ setPage }) { return <footer><div className="wrap footerGrid"><div><button className="brand footerBrand" onClick={() => goTo(setPage, 'home')}><span className="brandMark">OR</span><span>Opinião <b>Real</b></span></button><p>Análises honestas para ajudar você a comprar melhor.</p></div><div><h4>Explorar</h4><button onClick={() => goTo(setPage, 'fitness')}>Fitness</button><button onClick={() => goTo(setPage, 'ferramentas')}>Ferramentas</button><button onClick={() => goTo(setPage, 'casa')}>Casa</button><button onClick={() => goTo(setPage, 'compare')}>Comparativos</button></div><div><h4>Institucional</h4><button onClick={() => goTo(setPage, 'about')}>Sobre Nós</button><button onClick={() => goTo(setPage, 'contact')}>Contato</button><button onClick={() => goTo(setPage, 'privacy')}>Privacidade</button><button onClick={() => goTo(setPage, 'terms')}>Termos</button></div><div><h4>Transparência</h4><p>Alguns links podem gerar comissão, sem custo adicional para você.</p><button onClick={() => goTo(setPage, 'affiliate')}>Aviso de Afiliados</button></div></div><div className="wrap copyright">© 2026 Opinião Real. Conteúdo editorial independente.</div></footer>; }

function App() {
  const initial = window.location.pathname.replace(/^\//, '') || 'home';
  const [page, setPage] = useState(initial);
  useEffect(() => { const onPop = () => setPage(window.location.pathname.replace(/^\//, '') || 'home'); window.addEventListener('popstate', onPop); return () => window.removeEventListener('popstate', onPop); }, []);
  let content;
  if (page === 'home') content = <Home setPage={setPage} />;
  else if (page === 'compare') content = <Compare />;
  else if (['fitness', 'ferramentas', 'casa'].includes(page)) content = <Category slug={page} setPage={setPage} />;
  else if (guides.some(g => g.slug === page)) content = <Review slug={page} />;
  else if (page === 'contact') content = <About contact />;
  else if (page === 'privacy' || page === 'terms' || page === 'affiliate') content = <Legal type={page} />;
  else content = <About />;
  return <><Header page={page} setPage={setPage} />{content}<Footer setPage={setPage} /></>;
}

createRoot(document.getElementById('root')).render(<App />);
