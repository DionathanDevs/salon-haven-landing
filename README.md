# Salon Project (Lovable)

Este projeto foi preparado para ser facilmente customizável e implantado no **GitHub Pages**.

## Como Customizar (Reusable)

Todo o texto, imagens principais e informações do salão foram abstraídos para facilitar a alteração por qualquer pessoa, sem precisar mexer nos componentes da interface.

1. **Alterar Textos, Fotos e Links:**
   Abra o arquivo `src/config/site.ts`. Você encontrará todas as informações do site lá. Substitua os textos, altere o caminho das imagens (no topo do arquivo via imports) e salve. Todas as seções do site serão atualizadas automaticamente.

2. **Alterar Cores / Tema:**
   As cores estão definidas em `src/styles.css` usando variáveis OKLCH do Tailwind. Para trocar as cores de destaque e fundo, basta editar a tabela `:root` nos blocos `--primary`, `--lavender`, `--background`, `--foreground`, etc.

3. **Substituir Imagens Diretamente:**
   As imagens estão salvas na pasta `src/assets/`. Você pode simplesmente colocar as imagens dos seus clientes com os mesmos nomes dos arquivos existentes para substituí-las de forma rápida, ou adicionar novas ali e importar no `src/config/site.ts`.

## Como Publicar no GitHub Pages (Demonstração)

Este projeto já está configurado com um fluxo automatizado do GitHub Actions. 
Siga os passos abaixo para que ele apareça online:

1. **Crie um repositório no GitHub** e faça o push de todo este código para lá.
2. Certifique-se de que no arquivo `vite.config.ts`, a configuração baseada no nome do seu repositório está setada, se o seu repositório não estiver na raiz do domínio. Por padrão a action faz build na pasta `dist/`. *(Observação: Devido ao uso de rotas absolutas do TanStack Router, é mais recomendado utilizar um subdomínio próprio, ou hospedar pelo Cloudflare/Netlify se houver bugs no GitHub Pages em diretórios profundos. Para Github Pages, acesse: Settings > Pages e confirme o Deploy via GitHub Actions).*
3. Sempre que houver um commit e *push* na branch `main` ou `master`, o GitHub construirá sua aplicação sozinho (aba **Actions**) e liberará o link de demonstração automaticamente.
