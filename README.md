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

## Como Publicar no GitHub Pages (Sem Cloudflare)

Este projeto foi reconfigurado para ser 100% estático, perfeito para hospedar de graça e diretamente no GitHub Pages, sem depender de plataformas de terceiros.

1. **Crie um repositório no GitHub** e faça o push de todo este código para lá.
2. Certifique-se de que no arquivo `vite.config.ts`, a base URL foi ajustada se o seu repositório não for a raiz (por exemplo, se seu repo chama "salao", coloque `base: '/salao/'`).
3. Vá em **Settings > Pages**. Na opção "Build and deployment / Source", altere para **GitHub Actions** em vez de Deploy from a branch.
4. Sempre que houver um commit e *push* na branch `main` ou `master`, o GitHub construirá sua aplicação sozinho e publicará o site grátis pelo Github Actions.
