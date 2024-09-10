import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    tutorialSidebar: [
        {
            type: 'doc',
            id: 'installation',
        },
        {
            type: 'category',
            label: 'Unidad 1: Introducción',
            items: [
                'intro/introduction',
                'intro/Kotlin',
                'intro/basics',
                'intro/void-safety',
                'intro/input',
                'intro/clean',
                'intro/documentation',
            ],
        },
        {
            type: 'category',
            label: 'Unidad 2: Build Systems',
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
                    ],
                },
                'build-systems/static-analysis',
            ],
        },
        {
            type: 'category',
            label: 'Unidad 3: Programación Orientada a Objetos',
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
        {
            type: 'category',
            label: 'Unidad 4: Programación Funcional',
            link: {
                type: 'doc',
                id: 'fp/index',
            },
            items: [
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
    ],
    assignmentsSidebar: [
        {
            type: 'category',
            label: 'Tareas',
            items: [
                'assignments/rules',
                'assignments/assignment-1',
                'assignments/assignment-2',
            ],
        }
    ]
};

// noinspection JSUnusedGlobalSymbols
export default sidebars;
