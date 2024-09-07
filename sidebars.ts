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
                id: 'unit-2/index',
            },
            items: [
                'unit-2/build-systems',
                'unit-2/tasks',
            ],
        },
        {
            type: 'category',
            label: 'Unidad 3: Programación Orientada a Objetos',
            link: {
                type: 'doc',
                id: 'unit-3/index',
            },
            items: [
                'unit-3/objects',
                'unit-3/classes',
                'unit-3/lateinit',
                'unit-3/visibility',
                'unit-3/inheritance',
                'unit-3/constructors',
                'unit-3/interfaces',
                'unit-3/abstract-classes',
                'unit-3/open-closed',
                'unit-3/operator-overload',
                'unit-3/properties',
                'unit-3/extension',
                'unit-3/infix',
                'unit-3/data-classes',
                'unit-3/companion',
                'unit-3/enums',
                'unit-3/sealed',
                'unit-3/inheritance-2',
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
