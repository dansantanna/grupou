import React, { useState } from 'react';
import { Text, View} from 'react-native';

import {
    SkillContainer,
    Bar,
    SkillText,
    SkillTitle,
    SkillGraph
} from '../pages/Skill/styles';

export default function SkillBar(props) {
    return(
        <SkillContainer>
            <SkillTitle>
                {props.name}
            </SkillTitle>
                <SkillGraph>
                    <Bar width={props.width*10 * 90/100} />
                    <SkillText>
                        {props.width}
                    </SkillText>
                </SkillGraph>
        </SkillContainer>
    )
}