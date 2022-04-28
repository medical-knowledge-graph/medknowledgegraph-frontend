import React, { useEffect, useRef, useState } from "react";
import { Edge, Node } from "vis-network";
import { Network } from "vis-network/standalone/umd/vis-network.js";
import { NodeMetaData } from "../../models/NodeMetaData";

interface Props {
  readonly nodes: Node[];
  readonly edges: Edge[];
  readonly onNodeClick: (data: NodeMetaData) => void;
}

export const KnowledgeGraph: React.FC<Props> = ({
  nodes,
  edges,
  onNodeClick,
}) => {
  const visRef = useRef<HTMLDivElement>(null);

  const [network, setNetwork] = useState<Network | null>(null);

  useEffect(() => {
    network?.on("click", onNodeClick);
  }, [network, onNodeClick]);

  useEffect(() => {
    if (visRef.current !== null) {
      const network = new Network(
        visRef.current,
        { edges, nodes },
        {
          nodes: {
            shape: "dot",
            scaling: {
              min: 10,
              max: 30,
            },
            font: {
              size: 12,
              face: "Tahoma",
            },
          },
          edges: {
            width: 0.15,
            color: { inherit: "from" },
          },
          interaction: {
            tooltipDelay: 200,
          },
        }
      );

      setNetwork(network);
    }
  }, [visRef, nodes, edges]);

  return <div style={{ height: "94vh" }} ref={visRef} />;
};
