import Logo from '../../assets/img/logo.png'
import Abdala from '../../assets/img_our_team/Abdala.jpg'
import Amina from '../../assets/img_our_team/Amina.jpg'
import Stelio from '../../assets/img_our_team/Stelio.jpg'
import Herminia from '../../assets/img_our_team/Herminia.jpg'

export interface OurTeamProps {
    id: number
    name: string
    office: string
    text: string
    img: string
}

export const ourTeamData = [
    {
        id: 1,
        name: 'ARSÉNIO MANHICE',
        office: 'PCA',

        text: `É Presidente do Conselho de Administração (PCA) da Ariella Boats & Services S.A. desde a sua constituição. Antes 
        de se juntar à Ariella, Manhice foi Especialista Sénior de Advocacia na Counterpart International, uma ONG 
        americana. Na sua carreira já trabalhou para IREX International, Elizabeth Glaser e Sociedade do Notícias.
         Arsenio Manhice é docente nas Universidade São Tomás de Moçambique e Instituto Superior de Comunicação e 
        Imagem. Possui diversas publicações feitas na sua qualidade de consultor. Sua formação acadêmica passa pela 
        Escola de Jornalismo onde formau se em Jornalismo e, de seguida fez Direito na Universidade Eduardo Mondlane. É 
        casado e pai de 4 filhos. Seu maior sonho é tornar Ariella uma empresa de referência na assitência técnica à 
        empresas e organizações de sociedade civil.`,
        img: Logo,
    },
    {
        id: 2,
        name: 'RITA MANHICE',
        office: 'Directora Executiva',
        text: `Directora Executiva da Ariella Boats & Services S.A desde a sua constituição. Rita Manhice é colaboradora da 
        empresa Gespetro S.A. onde ocupa o cargo de Gestora. Tem cerca de 10 anos de experiência como gestora.
        É formada em Gestão de empresa e Recursos Humanos pelo Instituto Superior Alberto Chipande. Casada e mãe de 4 
        filhos, Rita está sempre pronta pra novos desafios profissionais. Seu maior sonho é tornar-se empresária e gestora 
        de sucesso.`,
        img: Logo,
    },
    {
        id: 3,
        name: 'JENNIFER MANHICE',
        office: 'Business & Project Assistant',
        text: `Possui a posição de Business & Project Assistant na Ariella Boats & Services S.A. Antes de se juntar a Ariella Boats 
        & Services S.A, trabalhou como Assistente no Saint Peter’s College, assim como realizou trabalhos voluntários como 
        professora de Inglês no Centro Cultural Americano e no colégio Arca do Saber.
        Fez o seu ensino médio na Metropolitan International College Swaziland Campus - Eswatin, tendo sido Coordenadora 
        de Desporto e Health Prefect. Participou em campeonatos de football, netball, volleyball e xadrez. Seu maior sonho 
        é se tornar numa empresária independente e fortalecer as crianças e mulheres vulneráveis à violência em 
        Moçambique bem como contribuir para que Ariella Boats & S.A cresça e seja reconhecida.`,
        img: Logo,
    },
    {
        id: 4,
        name: 'CLEMENTINO ABDALA',
        office: 'Oficial de Comunicação',
        text: `É Oficial de Comunicação da Ariella Boats & Services S.A., desde janeiro de 2021. Clementino Abdala, jovem e 
        comprometido com a fé em Deus, divide-se entre o seu trabalho, academia e voluntariado. Antes de se juntar à 
        Ariella, teve a oportunidade de estagiar em algumas organizações da sociedade civil, como é o caso do MISA 
        Moçambique. É, também, colaborador na Rádio Universitária da Universidade Eduardo Mondlane, onde é estudante 
        finalista do curso de Licenciatura em Jornalismo. Como um jovem normal, Abdala carrega todo um mar de sonhos, 
        mas, neste momento, o seu foco é ser peça fundamental na consolidação da Ariella como uma empresa de 
        referência na sua área de actuação. `,
        img: Abdala,
    },
    {
        id: 5,
        name: 'AMINA CHACAME',
        office: 'Oficial de Comunicação',
        text: `Colaboradora da Ariella Boats E Services S.A. desde Janeiro de 2021,ocupa o cargo de Oficial de Comunicação. 
        Possui uma larga experiência na Comunicação Social, tendo colaborado para diferentes Órgãos de Informação como 
        repórter. Formada em Literatura Moçambicana pela Universidade Eduardo Mondlane, durante o processo de 
        formação, foi monitora na disciplina de Retórica e poética tendo adquirido competências comunicativas que em 
        muito contribuíram para o seu crescimento profissional. Possui cursos básicos de jornalismo televisivo e de técnicas 
        de apresentação. Amante de livros, acredita que pode tornar um mundo melhor aumentando o nível de literacia na 
        camada jovem. Espera contribuir para o crescimento da Ariella Boats e Services S.A.`,
        img: Amina,
    },
    {
        id: 6,
        name: 'STÉLIO CANGELA',
        office: 'Operador de Câmera, Montion Graphic e Editor de conteúdo audiovisual',
        text: `É colaborador da Ariella Boats & Services S.A, onde trabalha como Operador de Câmera, Montion Graphic e Editor 
        de conteúdo audiovisual. Ao longo da sua carreira profissional, desempenhou funções similares na estação 
        televisiva TOp TV. Individualmente, Stélio Cangela tem feito trabalhos de filmagem e edição de vídeos para eventos. 
        Antes de se dedicar à produção audiovisual, foi bailarino profissional durante muitos anos, tendo trabalhado com 
        vários artistas moçambicanos, para além de participações em vídeo clipes. Actualmente solteiro, Cangela vive com 
        os seus pais e irmãos, carregando vários sonhos como, por exemplo, ganhar prestígio e destaque profissional na sua 
        área de trabalho.`,
        img: Stelio,
    },
    {
        id: 7,
        name: 'Bernardo Timane Jr',
        office: 'Programador Full-Stack',
        text: `É Programador Full-Stack da Ariella Boats & Services S.A. Como fruto da sua dedicação em estudos intensivos e em trabalhos no regime freelancer, Bernardo tem experiência em desenvolvimento de aplicativos mobile e web. É formado em Sistemas de Informação pelo Instituto de Transportes e Comunicações (ITC) e, actualmente, o jovem apaixonado pela tecnologia e programação caminha a passos largos para a conclusão da sua Licenciatura em Engenharia Informática, no Instituto Superior de Ciências e Tecnologia de Moçambique. A paixão pela “tech” faz com que o maior sonho de Bernardo Júnior seja levar a tecnologia à porta de todos.`,
        img: Logo,
    },
    {
        id: 8,
        name: 'HERMÍNIA CHILAULE',
        office: 'Estagiária de Administração de Negócios',
        text: `É estagiária para a área de Administração de Negócios na Ariella Boats & Services S. A. Hermínia é formada em 
        Economia pela Universidade de Goa, na Índia, onde teve também a oportunidade de participar de um estágio, durante 
        um mês, como Assistente de Negócios numa empresa que se dedica a poupança e investimentos. Embora o seu 
        maior sonho seja de se tornar em uma gestora de empresa própria ou não, a sua especialidade é Economia e 
        Negócios. Fora disso, Hermínia Chilaule tem habilidades na arte da maquilhagem e é apaixonada pelo canto.`,
        img: Herminia,
    },
    {
        id: 9,
        name: 'Dalton Sitoe',
        office: 'Marketing digital',
        text: `Voluntário da Ariella Boats & Service, desde Fevereiro de 2021, desempenhando a função de oficial de marketing digital. Trabalha com o mundo digital desde 2016, altura em que fundou a Revista Biografia, a primeira do género em Moçambique. É, ainda, webdesigner, e, explorando sua capacidade de criar e de inovar, fundou o site evangelístico Chave de Davi, em 2018; e a loja online O Ardina Digital, em 2020.
        É, desde 2020, licenciado em jornalismo, pela Universidade Eduardo Mondlane (UEM), e é jornalista de profissão desde 2013, sendo, actualmente, editor executivo da Revista ÍDOLO, e correspondente da Revista Macau, órgão de comunicação baseado em Macau, na China. Por meio do seu amor pelas soluções digitais, redacção jornalística, e experiência nos dois ramos, espera impactar empresas e organizações da sociedade civil através da demonstração digital das soluções que a Ariella oferece.
        `,
        img: Logo,
    },
    {
        id: 10,
        name: 'Dr Arsénio',
        office: 'ASSISTÊNCIA TÉCNICA E DESENVOLVIMENTO ORGANIZACIONAL',
        text: ``,
        img: Logo,
    },
] as OurTeamProps[]