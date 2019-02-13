import React from 'react'
import { css } from 'glamor'
import LangProgress from './LangCard'
import ExtLink from './ExtLink'
import langs from './langs'

function Title() {
  const header = css({
    marginBottom: '2rem',
    backgroundColor: '#20232a',
    color: '#ffffff',
    position: 'fixed',
    zIndex: '1',
    width: '100%',
    top: '0',
    left: '0',
    display: 'flex',
    justifyContent: 'center',
  })
  const h1Style = css({
    maxWidth: '1260px',
    padding: '0.2rem 2rem',
    fontSize: '2.5rem',
    fontWeight: 'normal',
    backgroundColor: '#20232a',
    color: '#ffffff',
  })
  return (
    <header {...header}>
      <h1 {...h1Style}>
        <span role="img" aria-label="globe">
          🌏
        </span>{' '}
        Is{' '}
        <span {...css({ color: '#61dafb' })}>
          <img
            {...css({ verticalAlign: 'middle' })}
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            alt="React"
            height="20"
          />
          React{' '}
        </span>
        Translated Yet?
      </h1>
    </header>
  )
}

function Description() {
  const style = css({
    fontSize: '1.5rem',
    marginBottom: '1rem',
    textAlign: 'center',
  })

  return (
    <p {...style}>
      Is <ExtLink href="https://reactjs.org">reactjs.org</ExtLink> available in:
    </p>
  )
}

function LangList() {
  const style = css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  })
  return (
    <div {...style}>
      {langs.map(lang => (
        <LangProgress key={lang.code} {...lang} />
      ))}
    </div>
  )
}

function Footer() {
  const style = css({
    marginTop: '2rem',
    marginBottom: '2rem',
    fontSize: '1.5rem',
  })
  return (
    <footer {...style}>
      <p>
        If you are interested in maintaining a translation, follow the
        instructions{' '}
        <ExtLink href="https://github.com/reactjs/reactjs.org-translation">
          here
        </ExtLink>
        .
      </p>
    </footer>
  )
}

export default function App() {
  const style = css({
    padding: '4rem',
    width: '100vw',
  })
  return (
    <div {...style}>
      <Title />
      <Description />
      <LangList />
      <Footer />
    </div>
  )
}
