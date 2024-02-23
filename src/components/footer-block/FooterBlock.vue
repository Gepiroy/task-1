<script setup>
import LeaveAnOrderBlock from '@/components/leave-an-order-block/LeaveAnOrderBlock.vue';
import IconLogo from "@/components/icons/IconLogo.vue";
</script>

<template>
  <leave-an-order-block></leave-an-order-block> <!-- В реальном макете тут бы ещё параметр ссылки и текста передавался. -->
  <div class="footer-content">
    <div class="footer-grid">
      <icon-logo></icon-logo>
      <div>
        <h3>РАЗДЕЛЫ</h3>
      </div>
      <div>
        <h3>УСЛУГИ</h3>
      </div>
      <div>
        <h3>ИНФОРМАЦИЯ</h3>
      </div>
    </div>
  </div>
</template>

<style>
.footer-content{
  padding: 0 80px;
}
.footer-grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>