<template>
    <v-container fluid>
        <div class="mt-3 mb-1">
          <h1 class="title-page text-uppercase">
            Controle de Funcionários
          </h1>
        </div>
        <v-dialog v-model="dialog" max-width="50vw">
            <v-card>
                <v-card-title>
                    <span class="headline">Cadastro de Funcionário</span>
                </v-card-title>

                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm6 md6>
                                <v-text-field label="Nome do funcionário"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md6>
                                <v-text-field label="Matricula"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-select
                                    :items="['vendedor', 'atendente', 'veterinário', 'auxiliar veterinário']"
                                    label="Cargo"
                                    hint="Selecione o cargo do funcionário"
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
                    Cadastrar Funcionário
                </v-btn>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="10">
                <v-card>
                    <v-card-title>
                        Listagem de funcionários
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
                        :items="getEmployees"
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
import {Employees} from '@/DB';

export default {
    name: 'Employees',
    data: () => ({
        dialog: false,
        headers: [
            {
                text: 'Nome',
                value: 'name',
                align: 'left'
            },
            {
                text: 'Matricula',
                sortable: false,
                align: 'left',
                value: 'registration'
            },
            {text: 'Cargo', value: 'role'},
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
        getEmployees() {
            return Employees;
        }
    }
}
</script>
<style lang="css">

</style>