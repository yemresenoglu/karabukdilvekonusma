import { blogPosts } from '../data/blogPosts.js'

function inlineFormat(text) {
  return text.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
}

function renderBlock(block) {
  const trimmed = block.trim()
  if (!trimmed) return ''

  if (trimmed.startsWith('## ')) {
    return `<h2>${inlineFormat(trimmed.slice(3))}</h2>`
  }

  if (trimmed.split('\n').every((line) => line.startsWith('- '))) {
    const items = trimmed
      .split('\n')
      .map((line) => `<li>${inlineFormat(line.slice(2))}</li>`)
      .join('')
    return `<ul>${items}</ul>`
  }

  return `<p>${inlineFormat(trimmed.replace(/\n/g, ' '))}</p>`
}

export function renderContent(content) {
  return content.split('\n\n').map(renderBlock).join('')
}

export function getAllPosts() {
  return [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) ?? null
}

export function formatDate(dateString) {
  return new Intl.DateTimeFormat('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateString))
}
