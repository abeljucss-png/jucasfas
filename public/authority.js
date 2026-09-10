(function(){
  var BRAND='Opinião Real';
  var DESCRIPTION='Portal de análises, comparativos e guias de compra.';
  var DATE='2026-09-10';
  var COMMERCIAL=['/melhores-bicicletas-spinning','/bicicleta-spinning-apartamento','/bicicleta-spinning-emagrece','/bicicleta-spinning-profissional-ou-residencial','/bicicleta-spinning-silenciosa','/bicicleta-spinning-vale-a-pena','/como-escolher-bicicleta-spinning','/comparativos/bicicleta-spinning-a-vs-b','/comparativos/parafusadeira-a-vs-b','/comparativos/esteira-a-vs-b','/ferramentas/melhores-kits-de-ferramentas'];
  function path(){return window.location.pathname.replace(/\/$/,'')||'/'}
  function commercial(){return COMMERCIAL.indexOf(path())!==-1}
  function addMeta(){
    if(!commercial()||document.querySelector('.commercialAuthority'))return;
    var target=document.querySelector('.reviewPage .crumb')||document.querySelector('main .crumb')||document.querySelector('main .hero');
    if(!target)return;
    var el=document.createElement('section');el.className='commercialAuthority';el.setAttribute('aria-label','Informações editoriais');
    el.innerHTML='<div class="meta"><span>Data de publicação: não informada</span><span>Atualizado em: 10/09/2026</span><span>Responsável pela revisão: Equipe Opinião Real</span></div><strong>Sobre esta análise</strong><p>Este conteúdo foi desenvolvido com base em pesquisa de características, comparação de modelos e análise de informações disponíveis. Dados comerciais e especificações devem ser conferidos antes da compra.</p>';
    target.insertAdjacentElement('afterend',el);
    var host=el.parentElement;
    if(host&&!host.querySelector('.commercialTrust')){
      var trust=document.createElement('section');trust.className='commercialTrust';trust.innerHTML='<h2>Por que confiar no Opinião Real?</h2><ul><li>Análises detalhadas</li><li>Comparações entre produtos</li><li>Critérios claros de avaliação</li><li>Informações organizadas para facilitar decisões</li></ul>';
      var end=host.querySelector('.affiliateNotice')||host.lastElementChild;
      if(end)end.insertAdjacentElement('beforebegin',trust);else host.appendChild(trust);
    }
  }
  function addFooterLinks(){
    var footer=document.querySelector('body > footer')||document.querySelector('#root footer');
    if(!footer||footer.getAttribute('data-authority-links'))return;
    var host=footer.querySelector('.footerGrid')||footer.querySelector('.authorityShell')||footer;
    var links=document.createElement('div');links.className='authorityFooterLinks';links.innerHTML='<a href="/sobre-nos">Sobre Nós</a><a href="/como-avaliamos">Como Avaliamos</a><a href="/transparencia">Transparência</a><a href="/privacy">Política de Privacidade</a><a href="/terms">Termos de Uso</a><a href="/afiliados">Aviso de Afiliados</a><a href="/contact">Contato</a>';
    host.appendChild(links);footer.setAttribute('data-authority-links','true');
  }
  function addFallbackFooter(){
    var root=document.getElementById('root');
    if(!root||root.querySelector('footer'))return;
    var footer=document.createElement('footer');footer.className='authorityFooter';footer.innerHTML='<div class="authorityShell"><div class="authorityLinks"><a href="/sobre-nos">Sobre Nós</a><a href="/como-avaliamos">Como Avaliamos</a><a href="/transparencia">Transparência</a><a href="/privacy">Política de Privacidade</a><a href="/terms">Termos de Uso</a><a href="/afiliados">Aviso de Afiliados</a><a href="/contact">Contato</a></div><div>© 2026 Opinião Real. Portal de análises, comparativos e guias de compra.</div></div>';
    root.appendChild(footer);
  }
  function addSchema(){
    var signature=path()+'|'+document.title+'|'+(commercial()?'article':'page');
    var current=document.getElementById('authority-schema');
    if(current&&current.getAttribute('data-signature')===signature)return;
    if(current)current.remove();
    var graph=[{'@type':'Organization',name:BRAND,url:'https://opiniaoreal.com/',description:DESCRIPTION}];
    var crumb=[{'@type':'ListItem',position:1,name:'Início',item:'https://opiniaoreal.com/'}];
    if(path()!=='/')crumb.push({'@type':'ListItem',position:2,name:document.title.replace(/ \|.*$/,''),item:'https://opiniaoreal.com'+path()});
    graph.push({'@type':'BreadcrumbList',itemListElement:crumb});
    if(commercial())graph.push({'@type':'Article',headline:document.title.replace(/ \|.*$/,''),description:DESCRIPTION,url:'https://opiniaoreal.com'+path(),dateModified:DATE,publisher:{'@type':'Organization',name:BRAND,url:'https://opiniaoreal.com/'},author:{'@type':'Organization',name:'Equipe Opinião Real',url:'https://opiniaoreal.com/autor/equipe-opiniao-real'}});
    var s=document.createElement('script');s.id='authority-schema';s.setAttribute('data-signature',signature);s.type='application/ld+json';s.textContent=JSON.stringify({'@context':'https://schema.org','@graph':graph});document.head.appendChild(s);
  }
  function run(){addMeta();addFooterLinks();addFallbackFooter();addSchema()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
  new MutationObserver(function(){run()}).observe(document.documentElement,{childList:true,subtree:true});
})();