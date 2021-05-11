Descreva possíveis otimizações de performance que você poderia fazer no seu
próprio código.

    1. A primeira e mais importante era, mesmo podendo, usar frameworks como ReactJS, Docker e outras ferramentas para fazer uma aplicação que realiza uma tarefa muito simples. A framework pesaria mais que a própria aplicação em si.

    2. Quando eu clico que "Mostrar mais", ele faz a requisição de todos os posts, mesmo os que não são necessários. Algumas formas de reduzir esse consumo de dados seria, na memória, requisitar somente os dados que não estavam na memória. No caso, a aplicação buscaria na memória os posts já armazenados na memória e faria a requisição somente dos próximos cinco posts que não estavam na memória e eu os empurraria para a memória e assim sucessivamente.

    3. Como não foi mencionado, mas se caso fosse possível, se houve outro endpoint de consumo, eu procuraria por consumir os posts de forma reduzida, ou completa quando necessário. No caso, na view1, a requisição me entrega o .json completo, o que não é necessário já que estaria mostrando conteúdo desnecessário que o usuário talvez não se interessasse. Se caso o usuário se interessar em ver mais sobre tal post, bastava clicar no link que o redirecionaria para a página com o post detalhado.

O que você poderia ter melhorado?

    1. A estilização.

    2. Um consumo mais econômico de API e de memória.

    3. De fato, não era nem necessário usar NodeJS para essa aplicação.