import React from 'react';
import ReactFlow, { Controls } from 'reactflow';
import NodeComponent from './node';
import 'reactflow/dist/style.css';
import './skillTree.scss';


const nodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { logo: 'portrait' },
  },
  {
    id: '2',
    position: { x: 200, y: -100 },
    data: { logo: 'logoHTML', label: 'HTML5' },
  },
  {
    id: '3',
    position: { x: 200, y: 50 },
    data: { logo: 'logoCSS', label: 'CSS3' },
  },
  {
    id: '4',
    position: { x: 100, y: 160 },
    data: { logo: 'logoJS', label: 'JavaScript' },
  },
  {
    id: '5',
    position: { x: -200, y: 150 },
    data: { logo: 'logoGithub', label: 'GitHub' },
  },
  {
    id: '6',
    position: { x: -300, y: 20 },
    data: { logo: 'logoFigma', label: 'Figma' },
  },
  {
    id: '7',
    position: { x: -150, y: -80 },
    data: { logo: 'logoNode', label: 'Node.js' },
  },
  {
    id: '8',
    position: { x: 350, y: -10 },
    data: { logo: 'logoSass', label: 'SASS' },
  },
  {
    id: '9',
    position: { x: 350, y: 150 },
    data: { logo: 'logoReact', label: 'REACT' },
  },
  {
    id: '10',
    position: { x: -330, y: -100 },
    data: { logo: 'logoMDB', label: 'MongoDB' },
  },


];

const edges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e1-4', source: '1', target: '4', animated: true },
  { id: 'e1-5', source: '1', target: '5', animated: true },
  { id: 'e1-6', source: '1', target: '6', animated: true },
  { id: 'e1-7', source: '1', target: '7', animated: true },
  { id: 'e3-8', source: '3', target: '8', animated: true },
  { id: 'e4-9', source: '4', target: '9', animated: true },
  { id: 'e7-10', source: '7', target: '10', animated: true },
];

const SkillTree = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow 
        nodes={nodes.map(node => ({
            ...node,
            data: {
              ...node.data,
              label: <NodeComponent data={node.data} /> // Utilise le composant personnalisé
            },
          }))}
        edges={edges} 
        fitView 
        panOnDrag={false}       // Désactive le déplacement
        zoomOnScroll={false}    // Désactive le zoom avec la molette de la souris
        zoomOnPinch={false}     // Désactive le zoom avec le pincement sur écran tactile
        zoomOnDoubleClick={false} // Désactive le zoom au double-clic
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default SkillTree;