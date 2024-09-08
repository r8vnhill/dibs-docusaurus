import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
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
                'unit-1/introduction',
                'unit-1/Kotlin',
                'unit-1/basics',
                'unit-1/void-safety',
                'unit-1/input',
                'unit-1/clean'
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
                'build-systems/tasks',
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

export default sidebars;
