import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    tutorialSidebar: [
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
                        {
                            type: 'category',
                            label: 'Introducción a la programación orientada a objetos',
                            link: {
                                type: 'doc',
                                id: 'intro/oop/oop',
                            },
                            items: [
                                "intro/oop/oop-langs",
                            ]
                        },
                        {
                            label: 'Clases abiertas y cerradas',
                            type: 'category',
                            link: {
                                type: 'doc',
                                id: 'intro/open-closed/open-closed-kt',
                            },
                            items: [
                                'intro/open-closed/open-closed-langs',
                            ],
                        },
                        {
                            type: 'category',
                            label: 'Propiedades/Accessors',
                            link: {
                                type: 'doc',
                                id: 'intro/properties/properties-kt',
                            },
                            items: [
                                "intro/properties/properties-langs",
                            ]
                        },
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
                        'intro/void-safety',
                    ]
                },
                // 'intro/input',
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
                {
                    type: 'category',
                    label: 'Mi primera aplicación',
                    link: {
                        type: 'doc',
                        id: 'build-systems/my-app',
                    },
                    items: [
                        'build-systems/my-app-langs'
                    ],
                },
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
                        {
                            label: 'Tareas personalizadas',
                            type: 'category',
                            link: {
                                type: 'doc',
                                id: 'build-systems/tasks/custom/custom-kt',
                            },
                            items: [
                                'build-systems/tasks/custom/custom-langs',
                            ],
                        },
                        {
                            label: "Tareas como clases",
                            type: "category",
                            link: {
                                type: 'doc',
                                id: 'build-systems/tasks/classes/classes-kt',
                            },
                            items: [
                                'build-systems/tasks/classes/classes-langs',
                            ],
                        },
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
            label: 'Unidad 3: APIs Funcionales',
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
                        {
                            type: 'category',
                            label: 'Tipos producto',
                            link: {
                                type: 'doc',
                                id: 'fp/adt/product'
                            },
                            items: [
                                "fp/adt/product-langs",
                            ]
                        },
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
                                {
                                    type: 'category',
                                    label: 'Clases selladas',
                                    link: {
                                        type: 'doc',
                                        id: 'fp/adt/sum/sealed',
                                    },
                                    items: [
                                        "fp/adt/sum/sealed-langs",
                                    ]
                                },
                            ],
                        },
                    ],
                },
                "fp/recursion",
                "fp/hof",
                {
                    label: 'Funciones lambda',
                    type: 'category',
                    link: {
                        type: 'doc',
                        id: 'fp/lambdas/lambdas-kt'
                    },
                    items: [
                        "fp/lambdas/lambdas-langs",
                    ]
                },
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
                        'fp/recursion-optimization/tail',
                        'fp/recursion-optimization/trampoline',
                    ],
                },
                {
                    type: 'category',
                    label: 'Mónadas',
                    link: {
                        type: 'doc',
                        id: 'fp/monads/monads-kt',
                    },
                    items: [
                        "fp/monads/monads-langs",
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
                                {
                                    label: 'Either',
                                    type: 'category',
                                    link: {
                                        type: 'doc',
                                        id: 'fp/monads/examples/either-kt',
                                    },
                                    items: [
                                        'fp/monads/examples/either-langs',
                                    ],
                                },
                                {
                                    label: 'Result',
                                    type: 'category',
                                    link: {
                                        type: 'doc',
                                        id: 'fp/monads/examples/result-kt',
                                    },
                                    items: [
                                        'fp/monads/examples/result-langs',
                                    ],
                                },
                            ],
                        },
                    ]
                },
            ],
        },
        {
            label: 'Unidad 4: Testing',
            type: 'category',
            link: {
                type: 'doc',
                id: 'testing/index',
            },
            items: [
                "testing/tdd",
                {
                    label: 'Testing de excepciones',
                    type: 'category',
                    link: {
                        type: 'doc',
                        id: 'testing/exceptions/exceptions-kt',
                    },
                    items: [
                        'testing/exceptions/exceptions-langs',
                    ],
                },
                {
                    label: 'Data-Driven Testing',
                    type: 'category',
                    link: {
                        type: 'doc',
                        id: 'testing/ddt/ddt-kt',
                    },
                    items: [
                        'testing/ddt/ddt-langs',
                    ],
                },
                "testing/assertions",
                {
                    label: 'Matchers',
                    type: 'category',
                    link: {
                        type: 'doc',
                        id: 'testing/matchers/index',
                    },
                    items: [
                        {
                            type: 'category',
                            label: 'Matchers comunes',
                            link: {
                                type: 'doc',
                                id: 'testing/matchers/common',
                            },
                            items: [
                                'testing/matchers/common-langs',
                            ],
                        },
                        {
                            type: 'category',
                            label: 'Matchers personalizados',
                            link: {
                                type: 'doc',
                                id: 'testing/matchers/custom',
                            },
                            items: [
                                "testing/matchers/custom-langs",
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Matchers compuestos',
                            link: {
                                type: 'doc',
                                id: 'testing/matchers/composed/composition',
                            },
                            items: [
                                "testing/matchers/composed/composition-langs",
                            ]
                        },
                    ]
                },
            ],
        },
        {
            label: 'Unidad 5: Colecciones',
            type: 'category',
            link: {
                type: 'doc',
                id: 'collections/index',
            },
            items: [
                {
                    label: 'Iterator pattern',
                    type: 'category',
                    link: {
                        type: 'doc',
                        id: 'collections/iterator/iterator-kt',
                    },
                    items: [
                        'collections/iterator/iterator-langs',
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
    ]
};

// noinspection JSUnusedGlobalSymbols
export default sidebars;
