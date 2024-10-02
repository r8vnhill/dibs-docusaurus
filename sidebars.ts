import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    tutorialSidebar: [
        {
            type: 'doc',
            id: 'howto',
        },
        {
            type: 'doc',
            id: 'installation',
        },
        {
            label: 'Unidad 1: Introducción',
            type: 'category',
            items: [
                'intro/introduction',
                'intro/clean',
                'intro/documentation',
                {
                    label: 'Introducción a Kotlin',
                    type: 'category',
                    link: {
                        type: 'doc',
                        id: 'intro/Kotlin',
                    },
                    items: [
                        'intro/basics',
                        'intro/types',
                        'intro/oop/oop',
                        'intro/open-closed/open-closed-kt',
                        'intro/properties/properties-kt',
                        {
                            type: 'category',
                            label: 'Sobrecarga de operadores',
                            link: {
                                type: 'doc',
                                id: 'intro/operator-overload/operator-overload-kt',
                            },
                            items: [
                                "intro/operator-overload/operator-overload-langs",
                            ]
                        },
                        'intro/exceptions/exceptions-kt',
                        'intro/void/void-safety',
                    ]
                },
            ],
        },
        {
            label: 'Unidad 2: Build Systems',
            type: 'category',
            link: {
                type: 'doc',
                id: 'build-systems/index',
            },
            items: [
                'build-systems/gradle-init',
                'build-systems/convention-plugins',
                'build-systems/global',
                {
                    type: 'category',
                    label: 'Configuraciones básicas',
                    link: {
                        type: 'doc',
                        id: 'build-systems/basic-config/basic-config-gradle',
                    },
                    items: [
                        'build-systems/basic-config/basic-config-langs',
                    ],
                },
                'build-systems/app/my-app',
                {
                    label: 'Tareas',
                    type: 'category',
                    link: {
                        type: 'doc',
                        id: 'build-systems/tasks/index',
                    },
                    items: [
                        {
                            label: 'Tareas predefinidas',
                            type: 'category',
                            link: {
                                type: 'doc',
                                id: 'build-systems/tasks/default/default-gradle',
                            },
                            items: [
                                'build-systems/tasks/default/default-langs',
                            ],
                        },
                        'build-systems/tasks/custom/custom-kt',
                        'build-systems/tasks/classes-kt'
                    ],
                },
                {
                    type: 'category',
                    label: 'Plugins',
                    link: {
                        type: 'doc',
                        id: 'build-systems/plugins/index',
                    },
                    items: [
                        'build-systems/plugins/apply',
                        'build-systems/plugins/custom',
                        'build-systems/plugins/extensions'
                    ],
                },
                'build-systems/static-analysis',
                {
                    label: "Mi primera biblioteca",
                    type: "category",
                    link: {
                        type: 'doc',
                        id: 'build-systems/library/index',
                    },
                    items: [
                        'build-systems/library/logic',
                        'build-systems/library/compile',
                        'build-systems/library/fat-jar',
                        'build-systems/library/copy-refined',
                        'build-systems/library/documentation',
                        {
                            type: "category",
                            label: "Publicación de bibliotecas",
                            link: {
                                type: 'doc',
                                id: 'build-systems/library/publish/publish-gradle',
                            },
                            items: [
                                'build-systems/library/publish/publish-langs',
                            ],
                        },
                    ],
                }
            ],
        },
        {
            label: 'Unidad 3: Polimorfismo Paramétrico',
            type: 'category',
            link: {
                type: 'doc',
                id: 'generics/index',
            },
            items: [

            ],
        },
        {
            label: 'Unidad 4: APIs Funcionales',
            type: 'category',
            link: {
                type: 'doc',
                id: 'fp/index',
            },
            items: [
                {
                    type: 'category',
                    label: 'Tipos de datos algebraicos',
                    link: {
                        type: 'doc',
                        id: 'fp/adt/index',
                    },
                    items: [
                        'fp/adt/product',
                        {
                            type: 'category',
                            label: 'Tipos suma',
                            link: {
                                type: 'doc',
                                id: 'fp/adt/sum/index',
                            },
                            items: [
                                {
                                    type: 'category',
                                    label: 'Enumeraciones',
                                    link: {
                                        type: 'doc',
                                        id: 'fp/adt/sum/enums',
                                    },
                                    items: [
                                        "fp/adt/sum/enums-langs",
                                    ]
                                },
                                'fp/adt/sum/sealed/sealed'
                            ],
                        },
                    ],
                },
                "fp/recursion",
                "fp/hof",
                'fp/lambdas/lambdas-kt',
                "fp/pure",
                {
                    type: 'category',
                    label: 'Optimización de Funciones Recursivas',
                    link: {
                        type: 'generated-index',
                        title: 'Optimización de Funciones Recursivas',
                        description: 'Uno de los problemas con la recursión es el caso en que la pila de ejecución se desborda. Existen distintas soluciones',
                    },
                    items: [
                        'fp/recursion-optimization/tail/tail',
                        'fp/recursion-optimization/trampoline',
                    ],
                },
                'fp/ad-hoc/kt',
                'fp/kinds/higher-kinded-types-kt',
                'fp/typeclass/kt',
                {
                    type: 'category',
                    label: 'Functores',
                    link: {
                        type: 'doc',
                        id: 'fp/functors/index',
                    },
                    items: [
                        {
                            type: 'category',
                            label: 'Ejemplos de functores',
                            link: {
                                type: 'generated-index',
                                title: 'Ejemplos comunes de functores',
                                description: 'Los functores son un concepto fundamental en programación funcional. Aquí se presentan algunos ejemplos comunes',
                            },
                            items: [],
                        },
                    ]
                },
                {
                    type: 'category',
                    label: 'Mónadas',
                    link: {
                        type: 'doc',
                        id: 'fp/monads/monads-kt',
                    },
                    items: [
                        {
                            type: 'category',
                            label: 'Ejemplos de mónadas',
                            link: {
                                type: 'generated-index',
                                title: 'Ejemplos comunes de mónadas',
                                description: 'Las mónadas son un concepto fundamental en programación funcional. Aquí se presentan algunos ejemplos comunes',
                            },
                            items: [
                                {
                                    label: 'Option',
                                    type: 'category',
                                    link: {
                                        type: 'doc',
                                        id: 'fp/monads/examples/option-kt',
                                    },
                                    items: [
                                        'fp/monads/examples/option-langs',
                                    ],
                                },
                                'fp/monads/examples/either-kt',
                                'fp/monads/examples/result/result-kt'
                            ],
                        },
                    ]
                },
            ],
        },
        {
            label: 'Unidad 5: Testing',
            type: 'category',
            link: {
                type: 'doc',
                id: 'testing/index',
            },
            items: [
                "testing/tdd",
                'testing/exceptions-kt',
                'testing/ddt/kt',
                "testing/assertions/assertions-kt",
                {
                    label: 'Matchers',
                    type: 'category',
                    link: {
                        type: 'doc',
                        id: 'testing/matchers/index',
                    },
                    items: [
                        'testing/matchers/common/kt',
                        'testing/matchers/custom/custom',
                        'testing/matchers/composed/composition',
                    ]
                },
                {
                    label: 'Property-Based Testing',
                    type: 'category',
                    link: {
                        type: 'doc',
                        id: 'testing/pbt/index',
                    },
                    items: [
                        'testing/pbt/concatenation/str-cat',
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'Unidad 6: APIs Orientadas a Objetos',
            link: {
                type: 'doc',
                id: 'oop/index',
            },
            items: [
                'oop/extension',
                'oop/infix',
                'oop/companion',
                'oop/inheritance-2',
            ],
        },
        {
            label: 'Unidad 7: Colecciones',
            type: 'category',
            link: {
                type: 'doc',
                id: 'collections/index',
            },
            items: [
                'collections/iterator-kt',
                'collections/types/immutable-kt',
                'collections/types/mutable-kt',
                'collections/types/lazy-kt',
            ],
        },
    ],
    assignmentsSidebar: [
        {
            type: 'category',
            label: 'Tareas',
            items: [
                'assignments/rules',
                'assignments/assignment-1',
                'assignments/assignment-2',
                'assignments/assignment-3',
                'assignments/assignment-4',
                'assignments/assignment-5',
            ],
        }
    ],
};

// noinspection JSUnusedGlobalSymbols
export default sidebars;
