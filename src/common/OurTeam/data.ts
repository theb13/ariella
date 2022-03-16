// import Abdala from "../../assets/img_our_team/Abdala.jpg"
import Stelio from "../../assets/img_our_team/Stelio.jpg"
// import Arsenio from "../../assets/img_our_team/Arsenio.jpg"
import Bernardo from "../../assets/img_our_team/Bernardo.jpg"
// import Bila from "../../assets/img_our_team/Bila.png"
import Chavane from "../../assets/img_our_team/Chavane.jpg"
import Jen from "../../assets/img_our_team/Jennifer.jpg"
// import Jana from "../../assets/img_our_team/Jana.jpeg"

export interface OurTeamProps {
    id: number
    name: string
    office: string
    text: string
    img: string
}

export const ourTeamData = [
    // {
    //     id: 1,
    //     name: "ARSÉNIO MANHICE",
    //     office: "PCA",

    //     text: `É Presidente do Conselho de Administração (PCA) da Ariella Group S.A. desde a sua constituição. Antes
    //     de se juntar à Ariella, Manhice foi Especialista Sénior de Advocacia na Counterpart International, uma ONG
    //     americana. Na sua carreira já trabalhou para IREX International, Elizabeth Glaser e Sociedade do Notícias.
    //      Arsenio Manhice é docente nas Universidade São Tomás de Moçambique e Instituto Superior de Comunicação e
    //     Imagem. Possui diversas publicações feitas na sua qualidade de consultor. Sua formação acadêmica passa pela
    //     Escola de Jornalismo onde formau se em Jornalismo e, de seguida fez Direito na Universidade Eduardo Mondlane.
    //     Seu maior sonho é tornar Ariella uma empresa de referência na assitência técnica à
    //     empresas e organizações de sociedade civil.`,
    //     img: Arsenio,
    // },
    // {
    //     id: 2,
    //     name: "RITA MANHICE",
    //     office: "Directora Executiva",
    //     text: `Directora Executiva da Ariella Group S.A desde a sua constituição. Rita Manhice é colaboradora da
    //     empresa Gespetro S.A. onde ocupa o cargo de Gestora. Tem cerca de 10 anos de experiência como gestora.
    //     É formada em Gestão de empresa e Recursos Humanos pelo Instituto Superior Alberto Chipande. Rita está sempre pronta pra novos desafios profissionais.
    //     Seu maior sonho é tornar-se empresária e gestora
    //     de sucesso.`,
    //     img: Logo,
    // },
    {
        id: 3,
        name: "JENNIFER MANHICE",
        office: "Business & Project Assistant",
        text: `Possui a posição de Business & Project Assistant na Ariella Group S.A. Antes de se juntar a Ariella Boats
        & Services S.A, trabalhou como Assistente no Saint Peter’s College, assim como realizou trabalhos voluntários como
        professora de Inglês no Centro Cultural Americano e no colégio Arca do Saber.
        Fez o seu ensino médio na Metropolitan International College Swaziland Campus - Eswatin, tendo sido Coordenadora
        de Desporto e Health Prefect. Participou em campeonatos de football, netball, volleyball e xadrez. Seu maior sonho
        é se tornar numa empresária independente e fortalecer as crianças e mulheres vulneráveis à violência em
        Moçambique bem como contribuir para que Ariella Boats & S.A cresça e seja reconhecida.`,
        img: Jen,
    },
    /* {
        id: 4,
        name: "CLEMENTINO ABDALA",
        office: "Oficial de Comunicação",
        text: `É Oficial de Comunicação da Ariella Group S.A., desde janeiro de 2021. Clementino Abdala, jovem e
        comprometido com a fé em Deus, divide-se entre o seu trabalho, academia e voluntariado. Antes de se juntar à
        Ariella, teve a oportunidade de estagiar em algumas organizações da sociedade civil, como é o caso do MISA
        Moçambique. É, também, colaborador na Rádio Universitária da Universidade Eduardo Mondlane, onde é estudante
        finalista do curso de Licenciatura em Jornalismo. Como um jovem normal, Abdala carrega todo um mar de sonhos,
        mas, neste momento, o seu foco é ser peça fundamental na consolidação da Ariella como uma empresa de
        referência na sua área de actuação. `,
        img: Abdala,
    }, */
    // {
    //     id: 5,
    //     name: "JANAINA BENILDE DE NORONHA",
    //     office: "Técnica Jurídica",
    //     text: `Janaína De Noronha é Técnica Jurídica na Ariella Group, S.A., desde o mês de Fevereiro de 2021. É formada em Direito pela Universidade São Tomás de Moçambique.
    //     Antes de se juntar a Ariella estagiou no Instituto de Patrocínio e Assistência Jurídica (IPAJ), onde teve o privilégio de lidar com algumas áreas do Direito (Cível, criminal, família, sucessões, laboral, comercial, entre outras), ajudando cidadãos carenciados na resolução dos seus conflitos. Já advogou diversas vezes em Tribunal.
    //     Sempre teve paixão pela leitura,  e pelo Direito.
    //     Pretende deste modo crescer profissionalmente na sua carreira, não só, mas também, contribuir para o crescimento desta Instituição.`,
    //     img: Jana,
    // },
    {
        id: 6,
        name: "STÉLIO CANGELA",
        office:
            "Operador de Câmera, Montion Graphic e Editor de conteúdo audiovisual",
        text: `É colaborador da Ariella Group S.A, onde trabalha como Operador de Câmera, Montion Graphic e Editor
        de conteúdo audiovisual. Ao longo da sua carreira profissional, desempenhou funções similares na estação
        televisiva TOp TV. Individualmente, Stélio Cangela tem feito trabalhos de filmagem e edição de vídeos para eventos.
        Antes de se dedicar à produção audiovisual, foi bailarino profissional durante muitos anos, tendo trabalhado com
        vários artistas moçambicanos, para além de participações em vídeo clipes. Actualmente Cangela vive com
        os seus pais e irmãos, carregando vários sonhos como, por exemplo, ganhar prestígio e destaque profissional na sua
        área de trabalho.`,
        img: Stelio,
    },
    {
        id: 7,
        name: "BERNARDO TIMANE JR",
        office: "Programador Full-Stack",
        text:
            "É Programador Full-Stack da Ariella Group S.A. Como fruto da sua dedicação em estudos intensivos e em trabalhos no regime freelancer, Bernardo tem experiência em desenvolvimento de aplicativos mobile e web. É formado em Sistemas de Informação pelo Instituto de Transportes e Comunicações (ITC) e, actualmente, o jovem apaixonado pela tecnologia e programação caminha a passos largos para a conclusão da sua Licenciatura em Engenharia Informática, no Instituto Superior de Ciências e Tecnologia de Moçambique. A paixão pela “tech” faz com que o maior sonho de Bernardo Júnior seja levar a tecnologia à porta de todos.",
        img: Bernardo,
    },
    {
        id: 8,
        name: "António Mário Chavane",
        office: " Graphic Designer",
        text: `É colaborador da Ariella Group S.A, onde trabalha como Graphic Designer. Formado pelo Instituto Superior
            de Arte e Cultura (ISArC), na sua carreira profissional desempenhou funções similares nem várias empresas que lidam
            com comunicação e marketing. Individualmente, Chavane tem feito trabalhos de design de comunicação marketing
            digitalsempre procuro pesquisar, apreender novas técnica e pratica-las cada vez mais, Interajo com profissionais da
            área com vista a busca experiência e novos conhecimentos. Locução faz parte das suas habilidade, que por via desta
            tem feito numa rádio dentro da cidade de Maputo. Tem tambem uma paixões enorme pela a arte de lecionar, onde
            buscou uma formação de caracter pedagogo como forma de alimentar a sua paixão, essa formação contribui no seu
            cotidiano pois tem dado pequenas formações ou orientações
            `,
        img: Chavane,
    },
    /* {
        id: 9,
        name: "Januário Bila",
        office: "Fotógrafo Profissional",
        text: `É Fotógrafo Profissional na Ariella Group, S.A. No seu currículo, Bila conta com uma formação em
            fotografia e filmagem. Para além de fotografias, na sua carrega já trabalhou e continua a desenvolver actividades
            como designer gráfico e Programador Web, tendo já colaborado para várias organizações.
        `,
        img: Bila,
    }, */
    // {
    //     id: 8,
    //     name: "HERMÍNIA CHILAULE",
    //     office: "Assitente de Administração de Negócios",
    //     text: `É assistente de Administração de Negócios na Ariella Group S. A. Hermínia é formada em
    //     Economia pela Universidade de Goa, na Índia, onde teve também a oportunidade de participar de um estágio, durante
    //     um mês, como Assistente de Negócios numa empresa que se dedica a poupança e investimentos. Embora o seu
    //     maior sonho seja de se tornar em uma gestora de empresa própria ou não, a sua especialidade é Economia e
    //     Negócios. Fora disso, Hermínia Chilaule tem habilidades na arte da maquilhagem e é apaixonada pelo canto.`,
    //     img: Herminia,
    // },
    // {
    //     id: 9,
    //     name: "DALTON SITOE",
    //     office: "Marketing digital",
    //     text: `Está na Ariella Boats & Service desde Fevereiro de 2021, desempenhando a função de oficial de marketing digital. Trabalha com o mundo digital desde 2016, altura em que fundou a Revista Biografia, a primeira do género em Moçambique. É, ainda, webdesigner, e, explorando sua capacidade de criar e de inovar, fundou o site evangelístico Chave de Davi, em 2018; e a loja online O Ardina Digital, em 2020.
    //     É, desde 2020, licenciado em jornalismo, pela Universidade Eduardo Mondlane (UEM), e é jornalista de profissão desde 2013, sendo, actualmente, editor executivo da Revista ÍDOLO, e correspondente da Revista Macau, órgão de comunicação baseado em Macau, na China. Por meio do seu amor pelas soluções digitais, redacção jornalística, e experiência nos dois ramos, espera impactar empresas e organizações da sociedade civil através da demonstração digital das soluções que a Ariella oferece.
    //     `,
    //     img: Dalton,
    // },
] as OurTeamProps[]
