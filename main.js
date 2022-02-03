import './style.scss'

const menuBlock = `
<div class="sticky-menu">
  <div class="sticky-menu--first-0">
    <ul>
      <li>Home</li>
    </ul>
    <div>Close</div>
  </div>
</div>
`;


document.querySelector('#app').innerHTML = menuBlock;
