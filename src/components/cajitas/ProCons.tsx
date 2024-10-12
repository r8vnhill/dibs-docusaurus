import React from 'react';
import './ProCons.css';

interface ProConsProps {
    children: React.ReactNode;
}

class ProCons extends React.Component<ProConsProps> {
    render() {
        return <div className="procons-container">{this.props.children}</div>;
    }
}

class Pros extends React.Component<ProConsProps> {
    render() {
        return (
            <div className="pros">
                <h3>Beneficios</h3>
                {this.props.children}
            </div>
        );
    }
}

class Cons extends React.Component<ProConsProps> {
    render() {
        return (
            <div className="cons">
                <h3>Limitaciones</h3>
                {this.props.children}
            </div>
        );
    }
}

export {ProCons, Pros, Cons};
