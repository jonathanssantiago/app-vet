<template>
  <v-app>
    <v-hover>
      <v-navigation-drawer
      color="primary"
      absolute
      app
      clipped
      dark
      hide-overlay
      slot-scope="{ hover }" 
      :mini-variant="expandDrawer && !hover"
    >
      <v-list
        dense
        nav
        class="py-0"
      >
        <v-list-item two-line :class="'px-0'">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>João da Silva</v-list-item-title>
            <v-list-item-subtitle>Administrador</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.link"
          >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </v-hover>

    <v-app-bar
      app
      color="primary"
      dark
      clipped-left
    >
     <v-app-bar-nav-icon @click="expandDrawer = !expandDrawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center title text-uppercase">
        Clínica Veterinária
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: true,
    expandDrawer: true,
      items: [
          { title: 'Home', icon: 'mdi-view-dashboard', link: { name: 'home' } },
          { title: 'Controle de Animais', icon: 'mdi-content-paste', link: { name: 'animals' } },
          { title: 'Serviços', icon: 'mdi-calendar-plus', link: { name: 'services' } },
          { title: 'Produtos', icon: 'mdi-cart', link: { name: 'products' } },
          { title: 'Funcionários', icon: 'mdi-account', link: { name: 'employees' } },
        ],
  }),
};
</script>
