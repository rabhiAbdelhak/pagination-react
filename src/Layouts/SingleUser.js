import React from 'react'

const SingleUser = ({login, avatar_url , html_url}) => {
  return (
    <article className='item'>
        <img src={avatar_url} alt='userimage'/>
        <p>{login}</p>
        <a className='btn' href={html_url}> View profile </a>
    </article>
  )
}

export default SingleUser