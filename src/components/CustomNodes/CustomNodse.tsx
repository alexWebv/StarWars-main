import { cn } from "@/src/utils/cn";
import { Handle, NodeProps, Position } from "reactflow";

type NodeData = {
  label: number;
};
export function CustomHeroNode({ data }: NodeProps<NodeData>) {
  return (
    <>
      <CustomNodeItem className="bg-black">{data.label}</CustomNodeItem>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
}

export function CustomFilmNode({ data }: NodeProps<NodeData>) {
  return (
    <>
      <Handle type="target" position={Position.Top} />

      <CustomNodeItem className="bg-black-purple">{data.label}</CustomNodeItem>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
}

export function CustomStarShipNode({ data }: NodeProps<NodeData>) {
  return (
    <>
      <Handle type="target" position={Position.Top} />

      <CustomNodeItem className="bg-black-red">{data.label}</CustomNodeItem>
    </>
  );
}

export function CustomNodeItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex-container group  relative h-[120px] w-[120px] rounded-full bg-[#662725] ", className)}>
      <span className="text-white text-center text-[14px]">{children}</span>
    </div>
  );
}
