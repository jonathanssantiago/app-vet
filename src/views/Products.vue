<template>
    <v-container fluid>
        <div class="mt-3 mb-1">
          <h1 class="title-page text-uppercase">
            Controle de Produtos
          </h1>
        </div>
        <v-dialog v-model="dialog" max-width="50vw">
            <v-card>
                <v-card-title>
                    <span class="headline">Cadastro de Produto</span>
                </v-card-title>

                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm6 md6>
                                <v-text-field label="Nome do produto"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                                <v-text-field label="Validade"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                                <v-text-field label="Quantidade"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                                <v-text-field label="Valor"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" @click="dialog = !dialog" outlined>Cancelar</v-btn>
                    <v-btn color="success" @click="dialog = !dialog">Salvar Cadastro</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-row class="text-right">
             <v-col cols="11">
                 <v-btn @click.stop="dialog = !dialog" color="success" dark class="mb-2" outlined>
                    <v-icon dark left>
                        mdi-plus-circle-outline
                    </v-icon>
                    Cadastrar Produto
                </v-btn>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="10">
                <v-card>
                    <v-card-title>
                        Listagem de produtos
                        <v-spacer></v-spacer>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-search"
                            label="Pesquisar"
                            single-line
                            hide-details
                        >
                        </v-text-field>
                    </v-card-title>
                    <v-data-table
                        :headers="headers"
                        :items="getProducts"
                        class="elevation-1"
                        :search="search"
                    >
                    <template v-slot:item.price="{ item }">
                        R$ {{ Number(item.price).toFixed(2) }}
                    </template>
                    <template v-slot:item.actions>
                        <v-icon
                        small
                        class="mr-2"
                        @click="dialog = !dialog"
                        color="warning"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon
                            small
                            class="mr-2"
                            color="error"
                        >
                            mdi-delete
                        </v-icon>
                    </template>
                        <v-alert slot="no-results" :value="true" color="error" icon="warning">
                            Não foi encontrado resultados para a sua pesquisa "{{ search }}".
                        </v-alert>
                        <template slot="no-data">
                            <v-alert :value="true" color="info" icon="mdi-warning">
                                Não foi encontrado registros :(
                            </v-alert>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { Products } from '@/DB';

export default {
    name: 'Products',
     data: () => ({
        dialog: false,
        headers: [
            {
                text: 'Nome',
                value: 'name',
                align: 'left'
            },
            {
                text: 'Preço',
                sortable: false,
                align: 'left',
                value: 'price'
            },
            {text: 'Quantidade', value: 'amount'},
            {text: 'Validade', value: 'date_validity'},
            {
                text: '',
                value: 'actions',
                align: 'left',
                sortable: false
            }
        ],
        search: '',
    }),
    computed: {
        getProducts() {
            return Products;
        }
    }
}
</script>
<style lang="css">

</style>