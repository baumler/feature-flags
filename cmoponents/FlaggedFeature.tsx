import React, {useEffect, useState} from 'react';
import flags from './features.json';

interface FeatureFlagModel {
    key: string;
    active: boolean;
}

type FeatureFlag = {
    [index: string]: FeatureFlagModel[];
}

export const FlaggedFeature: React.FC<{ flag: string, children: React.ReactNode }> = ({ children, flag}) => {
    const [active, setActive] = useState(true);

    useEffect(() => {
        const allFlags: FeatureFlag = {...flags};
        const env = allFlags[`${process.env.REACT_APP_ENVIRONMENT}`];
        const feature = env.find((items) => items.key === flag);
        if (feature) {
            setActive(feature.active);
        }
    }, [])

    if (active) return null;

    return <>{children}</>;
};
