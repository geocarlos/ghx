# GitHub Explorer

## Challenge proposed by Shaw and Partners

[The Full Stack Version](https://shawandpartners.com/full-back-front-test/)

## Back-end

The back-end is an Express. I implemented some tests with Jest, and some caching with Memory-Cache.

## Front-end

The front-end was implemented with React. At first I thought Redux would not be necessary, but it would be better with it.

I had implemented a way to memorize the pages to allow users to go back to the local state of the component that renders the user list, but I thought I should have Redux handle it. It works much better than using the component's local state.

If I had time, I would also implement some kind of search, or a field where the one could type a username, click a button and go straight to that user's detail page.
