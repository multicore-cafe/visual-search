# Article Visual Search

Article Visual Search is a browser-based tool for exploring scientific literature as a map instead of a long list of papers. It searches Semantic Scholar or PubMed, groups related articles by topic, and shows the result as an interactive visualization.

Live app: [multicore-cafe.github.io/visual-search](https://multicore-cafe.github.io/visual-search/)

## What It Is Useful For

This project helps when you want to get oriented in an unfamiliar research area, spot subtopics inside a broad query, or quickly see how a paper collection breaks into clusters. It is especially useful for literature review, topic discovery, and early-stage research exploration.

## How It Works

- Search for papers from Semantic Scholar or PubMed.
- Build embeddings from article titles and abstracts.
- Project the results into a 2D view and cluster related papers.
- Optionally use an OpenAI API key to generate short cluster names and summaries.

The app is statically built and runs fully in the browser. Aside from your search requests to Semantic Scholar or PubMed, no project backend is involved.

## Development

```bash
# install dependencies
npm install

# run the local dev server
npm start

# build the production bundle
npm run build

# preview the production bundle locally
npm run preview

# deploy to GitHub Pages
npm run deploy
```
