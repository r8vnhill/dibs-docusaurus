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
                'intro/Kotlin',
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
                'intro/open-closed',
                'intro/properties',
                'intro/operator-overload',
                'intro/void-safety',
                'intro/input',
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
                'build-systems/basic-config',
                'build-systems/convention-plugins',
                'build-systems/global',
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
                {
                    type: 'category',
                    label: 'Tareas',
                    link: {
                        type: 'doc',
                        id: 'build-systems/tasks/index',
                    },
                    items: [
                        'build-systems/tasks/default',
                        'build-systems/tasks/custom',
                        'build-systems/tasks/classes',
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
                    type: "category",
                    label: "Mi primera biblioteca",
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
                        'build-systems/library/publish',
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
                "testing/exceptions",
                 "testing/ddt",
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
                        "testing/matchers/composition",
                    ]
                },
            ],
        },
        {
            type: 'category',
            label: 'Unidad 5: Colecciones',
            link: {
                type: 'doc',
                id: 'collections/index',
            },
            items: [
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
