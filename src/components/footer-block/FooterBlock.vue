<script setup>
import IconLogo from "@img/IconLogo.vue";
import VkIcon from '@img/VkIcon.vue'
import InstagramIcon from '@img/InstagramIcon.vue'
</script>

<template>
  <div class="global-container">
    <div class="footer-block">
      <div class="footer-content">
        <div class="footer-grid">
          <icon-logo style="width: 202px; height: 80px;"></icon-logo>
          <div class="footer-column">
            <h3>РАЗДЕЛЫ</h3>
            <a>Главная</a>
            <a>Портфолио</a>
            <a>О компании</a>
            <a>Цены</a>
            <a>Контакты</a>
            <a>Услуги</a>
          </div>
          <div class="footer-column">
            <h3>УСЛУГИ</h3>
            <a>Корпоративные сайты</a>
            <a>Интернет-магазины</a>
            <a>Продающие лендинги</a>
            <a>Сложные веб-сервисы</a>
            <a>Программное обеспечение</a>
            <a>Онлайн продвижение</a>
            <a>Мобильная разработка</a>
          </div>
          <div class="footer-column">
            <h3>ИНФОРМАЦИЯ</h3>
            <a>Частозадаваемые вопросы</a>
            <a>Политика конфиденциальности</a>
            <a>Вакансии</a>
            <a>Партнерам</a>
            <a>Акции</a>
          </div>
        </div>
        <hr/>
        <div class="footer-last">
          <div class="footer-last-left">
            <a>ООО «Твой стартап»</a>
            <a>© 2020 — 2022</a>
            <a style="color: #A8ADAF;">8 800 350 93 98</a>
            <a style="color: #A8ADAF;">info@your-startup.space</a>
          </div>
          <div class="footer-last-right">
            <a><vk-icon></vk-icon></a>
            <a><instagram-icon></instagram-icon></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.footer-block{
  padding: 50px 0 0 0;
}
.footer-grid{
  padding: 0 0 80px 0; /* Отступ перед нижним (last) разделом от контента грида */
  display: flex;
  flex-direction: column;
  gap: 30px;
}
@media(min-width: 1024px){
  /* desktop */
  .footer-grid{
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
  }
  .footer-column{
    gap: 14px;
  }
}
.footer-column{
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.footer-last{
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 23px 0 21px 0;
}
.footer-last-left{
  display: flex;
  justify-content: space-between;
}
.footer-last-left a{
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #676F73;
}
.footer-last-right{
  display: flex;
  justify-content: end;
  gap: 10px;
}
.footer-column h3{
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 0;
  text-transform: uppercase;
}
.footer-column a{
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #676F73;
  text-decoration: none;
}
</style>