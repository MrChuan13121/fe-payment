import React from 'react';
import styles from './SimpleTable.module.css';

interface SimpleTableProps {
  title: string;
  content: string;
}

export default function SimpleTable({ title, content }: SimpleTableProps) {
  return (
    <table className={styles.simpleTable}>
      <tbody>
        <tr>
          <td className={styles.simpleTableTitle}>{title}</td>
          <td className={styles.simpleTableContent}>{content}</td>
        </tr>
      </tbody>
    </table>
  );
}