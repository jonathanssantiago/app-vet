<template>
    <v-container fluid>
        <div class="mt-3 mb-1">
          <h1 class="title-page text-uppercase">
            Controle de Animais
          </h1>
        </div>
        <v-dialog v-model="dialog" max-width="50vw">
            <v-card>
                <v-card-title>
                    <span class="headline">Cadastro de Animal</span>
                </v-card-title>

                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm6 md6>
                                <v-text-field label="Nome do animal"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                                <v-text-field label="Raça"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                                <v-text-field label="Nome completo do dono"></v-text-field>
                            </v-flex>
                             <v-flex xs12 sm6 md6>
                                <v-text-field label="Telefone"></v-text-field>
                            </v-flex>
                             <v-flex xs12 sm6 md6>
                                <v-text-field label="Endereço"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-select
                                    :items="['cachorro', 'gato', 'aves', 'repteis']"
                                    label="Classificação"
                                    hint="Selecione a classificação do animal"
                                    persistent-hint
                                ></v-select>
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
                    Cadastrar Animal
                </v-btn>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="10">
                <v-card>
                    <v-card-title>
                        Listagem de animais
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
                        :items="getAnimals"
                        class="elevation-1"
                        :search="search"
                    >
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
                            <v-alert :value="true" color="info" icon="warning">
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
import { Animals } from '@/DB'

export default {
    name: 'Animals',
    data: () => ({
        dialog: false,
            headers: [
                {
                    text: 'Nome',
                    value: 'name',
                    align: 'left'
                },
                {
                    text: 'Nome do Dono',
                    sortable: false,
                    align: 'left',
                    value: 'name_owner'
                },
                {text: 'Raça', value: 'breed'},
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
        getAnimals() {
            return Animals;
        }
    }
}
</script>
<style lang="css">
.title-page{
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #2a6ccfb9;
}
</style>