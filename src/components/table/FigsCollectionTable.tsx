import FigsCollectionTableProps from "../../interfaces/FigsCollectionTableProps";

import styles from "./FigsCollectionTable.module.css";

export default function FigsCollectionTable(props: FigsCollectionTableProps): JSX.Element {
  return (
    <table>
      <tbody>
        { buildTableData(props, 12)   }
        { buildTableData(props, 24)   }
        { buildTableData(props, 36)   }
        { buildTableData(props, 48)   }
        { buildTableData(props, 60)   }
        { buildTableData(props, 72)   }
        { buildTableData(props, 84)   }
        { buildTableData(props, 96)   }
        { buildTableData(props, 108)  }
        { buildTableData(props, 120)  }
        { buildTableData(props, 132)  }
        { buildTableData(props, 144)  }
        { buildTableData(props, 156)  }
        { buildTableData(props, 168)  }
      </tbody>
    </table>
  );
}

function buildTableData(props: FigsCollectionTableProps, maxCol: number): JSX.Element {
  return (
    <tr>
    {
      props.figsCollection.figs.map(fig => {
        const tdStyle = fig.figIsCollected ? styles[ "fig-collected" ] : styles[ "fig-not-collected" ];
        const key: number = Math.random();

        if (fig.figNumber >= (maxCol - 11) && fig.figNumber <= maxCol) {
          return (
            <td className={ tdStyle } key={ key }>
              { fig.figNumber + (fig.figIsSpecial ? ' S' : '') }
            </td>
          );
        } else {
          return <td className="invisible" key={ key }></td>;
        }
      })
    }
    </tr>
  );
}
