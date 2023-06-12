import './Layout.css';
export default function Layout() {
  return (
    <>
      <div id="sidebar">
        <h1>React Mini Admin</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
        </div>
        <nav>
          <ul>
            <li className="underline">test tailwind</li>
            <li>
              <a className="" href={`/contacts/1`}>
                test-a
              </a>
            </li>
            <li>
              <a href={`/contacts/2`}>test-b</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
