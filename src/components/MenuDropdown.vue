<template>
  <div class="dropdown-container">
      <button class="menu-dropdown">
        <slot name="title"></slot> <!-- Сюда передаётся не текст, а форматированная ссылка со совим стилем. -->
        <img src="@img/DropdownArrow.svg"/>
      </button>
      <div class="dropdown-content">
        <slot></slot>
      </div>
    </div>
</template>

<style scoped>
  .dropdown-container{
    float: left;
    overflow: hidden;
  }
  .dropdown-container:hover .dropdown-content{
    display:flex;
    flex-direction: column;
  }
  .dropdown-content{
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    padding: 4px;
    border-radius: 4px;
  }
  .menu-dropdown{
    display: flex;
    gap: 8px;
    background-color: transparent;
    border: none;
    outline: none;
    align-items: center;
    cursor: pointer;
  }
</style>