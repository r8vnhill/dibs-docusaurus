import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

type ExerciseProps = {
    title?: string;
    exercise: React.ReactNode;
    solution: React.ReactNode;
};

const ExerciseWrapper: React.FC<ExerciseProps> = ({ title, exercise, solution }) => {
    return (
        <div>
            <Admonition type="tip" title={"Ejercicio" + (title ? `: ${title}` : "")}>
                <Tabs>
                    <TabItem value="Enunciado" label="Enunciado">
                        {exercise}
                    </TabItem>
                    <TabItem value="Solución" label="Solución">
                        {solution}
                    </TabItem>
                </Tabs>
            </Admonition>
        </div>
    );
};

export default ExerciseWrapper;
