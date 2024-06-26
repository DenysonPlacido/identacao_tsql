function formatSQL(sql) {
    // Remover espaços desnecessários
    sql = sql.replace(/\s+/g, ' ');

    // =======================Original================================
    // Adicionar quebras de linha após palavras-chave SQL comuns
    // sql = sql.replace(/\b(SELECT|FROM|WHERE|AND|OR|INSERT|UPDATE|DELETE|JOIN|INNER|LEFT|RIGHT|OUTER|GROUP BY|ORDER BY|HAVING|CREATE|PROCEDURE|BEGIN|END)\b/ig, "\n$1");

    // // Adicionar indentação para melhorar a legibilidade
    // sql = sql.replace(/\b(FROM|WHERE|AND|OR|JOIN|INNER|LEFT|RIGHT|OUTER|GROUP BY|ORDER BY|HAVING|BEGIN|END)\b/ig, "\n    $1");
  
    // removidos:
    // Ajustar parênteses e outros elementos de formatação
    // sql = sql.replace(/\(/g, "(\n    ");
    // sql = sql.replace(/\)/g, "\n)");

    // Substituir vírgulas por quebra de linha e indentação
    // sql = sql.replace(/,/g, ",\n    ");
    // =======================================================


    // alterando....trabalhando em melhorias
    // Adicionar quebras de linha após palavras-chave SQL comuns
    sql = sql.replace(/\b(SELECT|FROM|WHERE|AND|OR|INSERT|UPDATE|DELETE|INNER JOIN|LEFT JOIN|RIGHT JOIN|OUTER JOIN|GROUP BY|ORDER BY|HAVING|CREATE|PROCEDURE|BEGIN|END)\b/ig, "\n$1");

    // Adicionar indentação para melhorar a legibilidade
    sql = sql.replace(/\b(FROM|WHERE|AND|OR|INNER JOIN|LEFT JOIN|RIGHT JOIN|OUTER JOIN|GROUP BY|ORDER BY|HAVING|BEGIN|END)\b/ig, "\n    $1");



    // Lidar com comentários (SQL padrão com "--")
    sql = sql.replace(/--.*$/gm, ""); // Remover comentários de linha inteira

    // Remover espaços em branco extras
    sql = sql.trim();

    return sql;
}

function formatAndDisplay() {
    var inputSQL = document.getElementById('sql-input').value; // Captura o SQL do textarea de entrada
    var formattedSQL = formatSQL(inputSQL); // Formata o SQL usando a função formatSQL()
    document.getElementById('sql-output').value = formattedSQL; // Exibe o SQL formatado no textarea de saída
}
