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
                'build-systems/my-app',
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
                        'fp/adt/product',
                        'fp/adt/enums',
                        'fp/adt/sealed',
                    ],
                },
                "fp/recursion",
                "fp/hof",
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
            type: 'category',
            label: 'Unidad 4: Testing',
            link: {
                type: 'doc',
                id: 'testing/index',
            },
            items: [
                "testing/tdd",
                "testing/exceptions",
                "testing/assertions",
                "testing/matchers",
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
                'oop/objects',
                'oop/classes',
                'oop/lateinit',
                'oop/visibility',
                'oop/inheritance',
                'oop/constructors',
                'oop/interfaces',
                'oop/abstract-classes',
                'oop/open-closed',
                'oop/operator-overload',
                'oop/properties',
                'oop/extension',
                'oop/infix',
                'oop/data-classes',
                'oop/companion',
                'oop/enums',
                'oop/sealed',
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
