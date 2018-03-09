const App = (props) =>
  <ul>
    {props.menu.map((item) =>
      <li key={item.name}>
        {item.name}
      </li>
    )}
  </ul>

window.App = App
