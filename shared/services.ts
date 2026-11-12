export interface Service {
  slug: string
  name: string
  /** Nome técnico, quando existe */
  technical?: string
  icon: 'nail' | 'corner' | 'callus' | 'dot' | 'drop' | 'hand' | 'home' | 'gloss'
  /** Foto real (Instagram da Paula) para o círculo do topo da página */
  image?: { src: string; alt: string }
  card: string
  seoTitle: string
  seoDescription: string
  lead: string
  what: string
  signs: string[]
  how: string[]
  care: string[]
  alert?: string
  faq: { q: string; a: string }[]
}

export const services: Service[] = [
  {
    slug: 'unha-encravada',
    name: 'Unha encravada',
    technical: 'Onicocriptose',
    icon: 'nail',
    card: 'Alívio da dor já no atendimento e orientação para a unha parar de voltar a encravar.',
    seoTitle: 'Unha encravada em Itapema | Tratamento com podóloga',
    seoDescription:
      'Tratamento de unha encravada em Itapema (SC) com a podóloga Paula Lemes. Remoção da espícula, alívio da dor e orientação para não voltar. Agende pelo WhatsApp.',
    lead: 'Unha encravada não se resolve cortando cada vez mais. Na verdade, é justamente esse hábito que faz ela voltar.',
    what: 'A unha encravada acontece quando a borda lateral da unha cresce para dentro da pele. Isso pode causar dor, vermelhidão, inchaço e, em alguns casos, inflamação. Corte errado, sapato apertado e o formato natural da unha são causas comuns.',
    signs: [
      'Dor no canto da unha ao calçar o sapato ou ao encostar no dedo',
      'Pele vermelha, inchada ou sensível na lateral da unha',
      'A unha encrava de novo poucas semanas depois de você cortar o cantinho',
      'Secreção ou pele crescendo por cima da unha',
    ],
    how: [
      'Avaliação da unha, da pele ao redor e do seu histórico',
      'Remoção cuidadosa da espícula (a ponta que está ferindo a pele)',
      'Limpeza e proteção da região com material esterilizado',
      'Orientação de corte e, quando indicado, plano de acompanhamento para corrigir o crescimento',
    ],
    care: [
      'Corte a unha reta, sem arredondar e sem tirar os cantinhos',
      'Evite sapato de bico fino ou apertado enquanto a região se recupera',
      'Não tente "cavar" o canto com alicate ou tesoura em casa',
    ],
    alert:
      'Se houver pus em grande quantidade, febre ou vermelhidão se espalhando pelo pé, procure atendimento médico. Pessoas com diabetes devem avisar no agendamento.',
    faq: [
      {
        q: 'O tratamento de unha encravada dói?',
        a: 'A Paula trabalha com delicadeza e vai explicando cada passo. A maioria das pessoas sai sentindo alívio, porque a ponta que machucava a pele é removida no próprio atendimento.',
      },
      {
        q: 'Em quantas sessões resolve?',
        a: 'Depende do caso. Muitas vezes a dor alivia na primeira sessão, mas unhas que encravam com frequência costumam precisar de acompanhamento para mudar o padrão de crescimento.',
      },
      {
        q: 'Posso cortar o cantinho em casa enquanto não consigo horário?',
        a: 'Melhor não. Cortar o canto alivia por alguns dias, mas deixa uma ponta que volta a crescer para dentro da pele. Chame no WhatsApp para encaixar o horário mais próximo.',
      },
    ],
  },
  {
    slug: 'onicofose',
    name: 'Onicofose',
    technical: 'Calo na lateral da unha',
    icon: 'corner',
    card: 'Aquele "cantinho dolorido" que parece unha encravada, mas é acúmulo de queratina.',
    seoTitle: 'Onicofose em Itapema | Calo no canto da unha',
    seoDescription:
      'Onicofose não é só um cantinho dolorido. Tratamento do acúmulo de queratina ao redor da unha com a podóloga Paula Lemes, em Itapema (SC).',
    lead: 'Onicofose não é apenas um "cantinho dolorido". É o acúmulo de queratina ao redor da unha, e ele pode doer bastante.',
    what: 'Na onicofose, a pele da lateral ou do canto da unha engrossa e forma uma espécie de calo. Muita gente confunde com unha encravada, corta a unha mais fundo e piora o quadro. Pressão do calçado e o jeito de pisar costumam estar por trás.',
    signs: [
      'Dor pontual no canto da unha, principalmente com sapato fechado',
      'Pele endurecida, amarelada ou espessa na lateral da unha',
      'Sensação de "pedrinha" no canto do dedo',
    ],
    how: [
      'Avaliação para diferenciar onicofose de unha encravada',
      'Remoção do acúmulo de queratina com técnica e instrumental adequados',
      'Hidratação e proteção da região',
      'Orientação sobre calçado e frequência de manutenção',
    ],
    care: [
      'Prefira calçados com espaço na ponta dos dedos',
      'Hidrate os pés diariamente, evitando entre os dedos',
      'Não corte a unha mais fundo achando que é encravada',
    ],
    faq: [
      {
        q: 'Onicofose volta?',
        a: 'Pode voltar se a causa continuar, como pressão do sapato. Por isso o tratamento vem com orientação e, quando necessário, manutenção periódica.',
      },
      {
        q: 'Como sei se é onicofose ou unha encravada?',
        a: 'Os sintomas são parecidos, e é exatamente por isso que vale a avaliação. Na consulta a Paula identifica o que está acontecendo antes de tratar.',
      },
    ],
  },
  {
    slug: 'calos-e-calosidades',
    name: 'Calos e calosidades',
    icon: 'callus',
    card: 'Remoção segura de calos e pele grossa, para você voltar a pisar sem incômodo.',
    seoTitle: 'Tratamento de calos e calosidades em Itapema | Podóloga',
    seoDescription:
      'Remoção de calos, calosidades e pele grossa nos pés em Itapema (SC). Atendimento com a podóloga Paula Lemes, com material esterilizado. Agende pelo WhatsApp.',
    lead: 'Calo é o jeito que o seu pé encontra de se proteger de pressão e atrito. O problema é quando essa proteção começa a doer.',
    what: 'Calosidades são áreas de pele mais grossa, geralmente na sola, no calcanhar ou nas laterais. O calo (heloma) é mais localizado e pode ter um núcleo que pressiona como uma pedrinha. Calçado, pisada e ressecamento influenciam.',
    signs: [
      'Pele grossa, amarelada ou áspera na sola ou no calcanhar',
      'Dor pontual ao pisar, como se tivesse uma pedrinha',
      'Rachaduras no calcanhar',
    ],
    how: [
      'Avaliação da pisada e das áreas de pressão',
      'Remoção do calo e desbaste da calosidade de forma segura',
      'Hidratação e orientação de cuidados',
    ],
    care: [
      'Não use lâminas ou "raladores" agressivos em casa',
      'Hidrate os pés todos os dias',
      'Reveja o calçado que você mais usa',
    ],
    faq: [
      {
        q: 'Tirar calo dói?',
        a: 'Não deveria. A remoção é feita camada por camada, respeitando a pele saudável. O normal é sair com o pé leve.',
      },
      {
        q: 'De quanto em quanto tempo preciso voltar?',
        a: 'Varia conforme a sua pisada e rotina. Muitas clientes fazem manutenção mensal para não deixar acumular.',
      },
    ],
  },
  {
    slug: 'verruga-plantar',
    name: 'Verruga plantar',
    icon: 'dot',
    card: 'Pequena por fora, mas pode incomodar muito ao caminhar. Tratamento com acompanhamento.',
    seoTitle: 'Verruga plantar em Itapema | Tratamento com podóloga',
    seoDescription:
      'Tratamento de verruga plantar em Itapema (SC). Avaliação, tratamento e acompanhamento com a podóloga Paula Lemes. Agende pelo WhatsApp.',
    lead: 'A verruga plantar é pequena por fora, mas pode causar bastante incômodo na hora de caminhar.',
    what: 'A verruga plantar aparece na sola do pé e é causada por um vírus (HPV). Por estar numa área de apoio, ela é empurrada para dentro pelo peso do corpo e costuma doer ao pisar. Muitas vezes é confundida com calo.',
    signs: [
      'Lesão na sola com pontinhos escuros no centro',
      'Dor ao apertar dos lados, mais do que ao pressionar de frente',
      'Lesão que aumenta ou aparece em outros pontos do pé',
    ],
    how: [
      'Avaliação para diferenciar verruga de calo',
      'Tratamento conduzido em sessões, conforme o caso',
      'Acompanhamento da evolução até a pele se renovar',
    ],
    care: [
      'Evite andar descalço em vestiários e áreas de piscina',
      'Não arranque nem corte a verruga em casa',
      'Use toalha e chinelo próprios',
    ],
    faq: [
      {
        q: 'Verruga plantar é contagiosa?',
        a: 'Pode ser transmitida em ambientes úmidos e de uso coletivo. Por isso vale usar chinelo e evitar compartilhar toalhas.',
      },
      {
        q: 'Quantas sessões são necessárias?',
        a: 'Depende do tamanho, da quantidade e da resposta da pele. A Paula define o plano depois de avaliar.',
      },
    ],
  },
  {
    slug: 'unhas-alteradas',
    name: 'Unhas alteradas e descolamento',
    technical: 'Onicólise e alterações ungueais',
    icon: 'drop',
    image: { src: '/images/instagram/DdCtNYYlL4z.webp', alt: 'Unha do pé com descolamento, caso real atendido pela Paula Lemes' },
    card: 'Unha descolando, manchada, grossa ou com aspecto diferente? Cada caso pede avaliação individual.',
    seoTitle: 'Unha descolando ou alterada em Itapema | Podóloga',
    seoDescription:
      'Unha descolada, grossa, manchada ou com aspecto diferente? Avaliação e tratamento com a podóloga Paula Lemes, em Itapema (SC).',
    lead: 'Cada unha tem seu tempo, e cada caso precisa de uma avaliação individual. Do descolamento à recuperação, o acompanhamento faz diferença.',
    what: 'Alterações de cor, espessura, formato ou o descolamento da unha (onicólise) podem ter várias causas: trauma, atrito do calçado, umidade, fungos, entre outras. Não dá para saber a causa só olhando uma foto. A avaliação define o caminho.',
    signs: [
      'Unha se soltando da pele, com espaço embaixo',
      'Mudança de cor: amarelada, esbranquiçada ou escurecida',
      'Unha grossa, quebradiça ou com formato diferente',
    ],
    how: [
      'Avaliação da unha e do histórico',
      'Limpeza, desbaste e cuidados específicos para o caso',
      'Acompanhamento em sessões até a unha nova crescer saudável',
      'Encaminhamento ao médico dermatologista quando necessário',
    ],
    care: [
      'Seque bem os pés, inclusive entre os dedos',
      'Alterne os calçados e deixe-os arejar',
      'Evite esmaltar uma unha alterada sem orientação',
    ],
    faq: [
      {
        q: 'Unha descolada volta a grudar?',
        a: 'A parte que já soltou normalmente não volta a colar. O que acontece é a unha nova crescer saudável e substituir a antiga, e o tratamento cuida disso.',
      },
      {
        q: 'Quanto tempo demora?',
        a: 'A unha do pé cresce devagar. Uma troca completa pode levar meses, por isso o acompanhamento é feito por etapas.',
      },
    ],
  },
  {
    slug: 'podologia-geriatrica',
    name: 'Podologia geriátrica',
    icon: 'hand',
    card: 'Os pés também envelhecem. Cuidado com paciência, conforto e segurança para quem tem mais idade.',
    seoTitle: 'Podologia geriátrica em Itapema | Cuidado para idosos',
    seoDescription:
      'Podologia geriátrica em Itapema (SC): corte de unhas, calos e cuidados com os pés de pessoas idosas, com conforto e segurança. Também a domicílio.',
    lead: 'Os pés também envelhecem e merecem cuidados especiais. A podologia geriátrica traz mais conforto, saúde e qualidade de vida.',
    what: 'Com a idade, as unhas tendem a ficar mais grossas e a pele mais fina e ressecada. Fica difícil alcançar os pés, enxergar bem e cortar as unhas com segurança. Pequenos problemas, se ignorados, viram dor e risco de queda.',
    signs: [
      'Unhas grossas, difíceis de cortar em casa',
      'Calos e rachaduras que incomodam ao caminhar',
      'Dificuldade de se abaixar ou de enxergar os pés',
    ],
    how: [
      'Atendimento com calma, respeitando o tempo e a mobilidade de cada pessoa',
      'Corte e desbaste de unhas espessas',
      'Remoção de calos e hidratação',
      'Opção de atendimento em casa para quem tem dificuldade de locomoção',
    ],
    care: [
      'Observe os pés todos os dias, ou peça ajuda a alguém da família',
      'Use calçado fechado, confortável e com sola antiderrapante',
      'Mantenha a pele hidratada',
    ],
    faq: [
      {
        q: 'Vocês atendem idosos em casa?',
        a: 'Sim. Existe a opção de atendimento domiciliar para quem tem dificuldade de se deslocar. Chame no WhatsApp para combinar.',
      },
    ],
  },
  {
    slug: 'atendimento-domiciliar',
    name: 'Atendimento domiciliar',
    technical: 'Podologia home care',
    icon: 'home',
    card: 'A Paula vai até você. Ideal para idosos, pessoas acamadas ou com mobilidade reduzida.',
    seoTitle: 'Podóloga a domicílio em Itapema | Home care',
    seoDescription:
      'Podologia home care em Itapema (SC): a podóloga Paula Lemes atende na sua casa, com o mesmo cuidado e biossegurança da clínica. Agende pelo WhatsApp.',
    lead: 'Para quem não pode ir até a clínica, a clínica vai até você. Com o mesmo cuidado e a mesma biossegurança.',
    what: 'O atendimento domiciliar é pensado para idosos, pessoas acamadas, em recuperação de cirurgia ou com qualquer dificuldade de locomoção. A Paula leva o material esterilizado e faz o atendimento no conforto da casa.',
    signs: [
      'Dificuldade para sair de casa ou subir escadas',
      'Recuperação pós-cirúrgica',
      'Familiar que precisa de cuidado regular com os pés',
    ],
    how: [
      'Você chama no WhatsApp e conta a necessidade',
      'Combinamos dia, horário e endereço',
      'A Paula vai até você com todo o material',
      'Atendimento completo e orientação para a família',
    ],
    care: [
      'Separe um lugar bem iluminado e uma cadeira confortável',
      'Tenha à mão receitas ou laudos, se houver',
    ],
    faq: [
      {
        q: 'Quais regiões são atendidas?',
        a: 'Itapema e arredores. Confirme o seu endereço pelo WhatsApp na hora de agendar.',
      },
    ],
  },
  {
    slug: 'unhas-e-esmaltacao-em-gel',
    name: 'Unhas e esmaltação em gel',
    icon: 'gloss',
    image: { src: '/images/instagram/DaQstEAySvt.webp', alt: 'Esmaltação em gel vermelha feita na clínica Paula Lemes' },
    card: 'Cutícula impecável e esmaltação em gel, com o olhar técnico de quem entende de unha.',
    seoTitle: 'Esmaltação em gel em Itapema | Paula Lemes',
    seoDescription:
      'Esmaltação em gel e cuidado de cutículas em Itapema (SC), feitos por uma podóloga. Unhas bonitas e saudáveis. Agende pelo WhatsApp.',
    lead: 'A clínica não cuida só dos pés. Agora você também encontra esmaltação em gel, para deixar suas unhas bonitas por mais tempo.',
    what: 'Quem já fez a cutícula com a Paula costuma comentar o acabamento. O olhar de podóloga ajuda aqui: cutícula bem feita, esmaltação caprichada e o cuidado de não agredir a unha.',
    signs: [
      'Você quer unhas bonitas por mais tempo',
      'Procura alguém criterioso com higiene e material',
    ],
    how: [
      'Preparação e cuidado com as cutículas',
      'Esmaltação em gel',
      'Orientação para manter a unha saudável',
    ],
    care: ['Não arranque o gel em casa: a remoção correta protege a sua unha'],
    faq: [
      {
        q: 'Posso fazer esmaltação em gel com unha alterada?',
        a: 'Depende da alteração. A Paula avalia antes e, se não for indicado, explica o porquê e o que fazer primeiro.',
      },
    ],
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
