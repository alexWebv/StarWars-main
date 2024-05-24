"use client";
import ReactFlow, { Edge, Node } from "reactflow";
import "reactflow/dist/style.css";
import { useMemo } from "react";

import { CustomFilmNode, CustomHeroNode, CustomStarShipNode } from "../../components/CustomNodes/CustomNodse";

function GrapthDisplayComponent({ nodes, edges }: { nodes: Node[]; edges: Edge[] }) {
  // useMemo hook to memoize node types to avoid unnecessary re-renders
  const nodeTypes = useMemo(
    () => ({ customHeroNode: CustomHeroNode, customFilmNode: CustomFilmNode, customSharShipNode: CustomStarShipNode }),
    []
  );

  return (
    <div className="bg-grapth-black h-[calc(100dvh-80px)] w-full">
      <ReactFlow fitView nodeTypes={nodeTypes} nodes={[...nodes]} edges={[...edges]}></ReactFlow>
    </div>
  );
}

export default GrapthDisplayComponent;
