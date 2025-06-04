# Article visual search

This service provides a visual interface for investigating research areas. It searches for articles using SemanticScholar or PubMed, and then visualizes their topics via vector embeddings of the article abstracts. 
You can also provide an OpenAI API key for generating cluster content summaries. The service is statically built and operates fully on client-side via WebAssembly.
There is no data transfer to external servers, except for Semantic Scholar or PubMed search queries.

You can access the [service here](https://multicore-cafe.github.io/visual-search/).

## Development

To build:

```bash
# init
npm install

# dev
npm start

# build
npm run build

# deploy to gh-pages
npm run deploy
```
