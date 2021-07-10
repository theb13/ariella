import Casamento from "../../assets/img_ariella_studio/casamento.jpg"
import Mel from "../../assets/img_ariella_studio/mel.jpg"
import Namoro from "../../assets/img_ariella_studio/namoro.jpg"

export interface OurServicesProps {
    id: string
    title: string
    text: string
    icon: any
    img: string
}

export const ourServicesData = [
    {
        title: "Assistência técnica especializada",
        text: `Temos uma equipa preparada para elaboração de documentos estratégicos de empresas, instituições ou organizações. Nos dias de hoje não dá mais para “caminhar tacteando”, e Ariella Boats auxilia a sua organização a delinear estratégias claras para abordar a caminhada rumo aos seus objectivos. Ainda neste âmbito, Ariella faz pesquisas e organiza eventos públicos. Ariella dá, ainda, assistência na realização de Webniarsʼs (seminários através de internet) combinando ferramentas de comunicação como Youtube, Facebook, Instagram, Zoom, Teams, Skype, entre outras.
        `,
        icon: 1,
    },
    {
        title: "Assessoria em comunicação e imagem",
        text: `Aconselhamos, desenvolvemos, e implementamos planos de comunicação e imagem sustentáveis, tendo em conta a dimensão e grupo alvo da empresa ou organização. Temos, também, soluções eficazes para gestão de crises de comunicação. A boa reputação é deveras valiosa, sobretudo quando a capitalizamos. Elaboramos estratégias; criamos e gerimos websites e redes sociais institucionais. Também criamos e damos treinamento para o fortalecimento de departamentos de comunicação para que os técnicos e gestores possam produzir conteúdo audiovisual de alta qualidade ao nível de aspectos gráficos; exploração do marketing digital pleno e das múltiplas vantagens dos “media digitais”, como alternativa para os media tradicionais.
        `,
        icon: 2,
    },
    {
        title: "Serviços Gráficos, Design & Serigrafia ",
        text: `A empresa possui dos mais competitivos serviços de Gráfica, Design e Serigrafia de Moçambique. Desde a sua criação a Ariella pautou por oferecer conceitos gráficos criativos e detalhistas destacando-se por conceber e apresentar projecto de design, produção e finalização de alto padrão. Dentre outros produtos concebemos e imprimimos relatórios de actividades; logotipos; blocos de notas personalizados, brochuras; calendários; entre outros produtos. Aliamos a celeridade e qualidade em toda nossa obra.
        `,
        icon: 3,
    },
    {
        title: "Monitoria e avaliação mediática",
        text: `Saiba o que os meios de comunicação estão a falar sobre a sua entidade e como estão a falar. Seja devido ao tempo operacional demandado dos seus colaboradores, ou pela falta de base para a execução da monitoria, ninguém tem tempo para ler tudo. Portanto, contratar uma empresa para fazer isso é garantir matéria-prima, banco de dados, busca e recuperação de informação sobre a sua marca. Por meio da “Media Coding”, a Ariella monitora mais de 20 canais, entre jornais, Rádio, TV, portais e sites de notícias. Com este serviço, ficará a saber: quais são os veículos nos quais a instituição tem maior aceitação; quais são os assuntos que rendem mais pautas; e como os jornalistas utilizam o material encaminhado pela assessoria. E por via destes dados sua empresa poderá gerir melhor a relação com os media e seus clientes ou grupo-alvo, para além de ensaiar novas formas de atingir o seu público.
             `,
        icon: 4,
    },
    {
        title: "Estúdio de televisão e fotografia ",
        text: `Na área de televisão oferecemos serviço de aconselhamento na produção de pauta de programas televisivos, bem como projecção e produção de programas de televisão para empresas e organizações. Ter um programa televisivo ou alimentar um programa de televisão com conteúdos é bastante importante para tornar notáveis as actividades da sua empresa ou organização. Na área de fotografia concebemos e produzimos material fotográfico dentro e fora de estúdio. Temos os mais modernos equipamentos para fazer cobertura fotográfica de conferências, casamentos, aniversários e outros eventos sociais.
        `,
        icon: 5,
    },
    {
        title: "Agência de publicidade",
        text: `
        Produzimos material gráfico, spots radiofónicos e vídeos publicitários para televisão, rádio, jornais, revistas, outdoors, e o mundo digital. Projectamos campanhas publicitárias sustentáveis, considerando a dimensão, recursos, grupo-alvo, e os objectivos por serem alcançados pela empresa ou organização.
        `,
        icon: 6,
    },
] as OurServicesProps[]

export const ourServicesStudioData = [
    {
        id: "Photoshoot",
        title: "Photoshoot",
        text: `Aprecia aqui o nosso portefólio mais recente de sessões fotográficas [photoShoots].
        Para fazer photoshoots connosco é só ligar e agendar
        `,
        icon: 3,
        img: Mel,
    },
    {
        id: "Eventos socias",
        title: "Acompanhamento de Eventos socias",
        text: `A Ariella Studio faz cobertura de eventos desde conferências; reuniões; festas; e muito mais. Aprecia aqui o nosso portefólio mais recente de eventos que cobrimos. `,
        icon: 5,
        img: Casamento,
    },
    {
        id: "Publicidade",
        title: "Produção de publicidade",
        text: `Aprecia aqui o nosso portefólio mais recente de material publicitário. Para produzir sua publicidade connosco é só ligar e solicitar.`,
        icon: 6,
        img: Namoro,
    },
] as OurServicesProps[]
