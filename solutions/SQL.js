// SELECT
// FACTORIES.NAME,
//     GRADES.GRADE,
//     FACTORIES.D_QTY,
//     CASE WHEN GRADES.GRADE <= 'D' THEN 'O' ELSE '' END AS Target
// FROM
// FACTORIES
// JOIN
// GRADES ON FACTORIES.D_QTY BETWEEN GRADES.MIN_D_RATE AND GRADES.MAX_D_RATE
// ORDER BY
// GRADES.GRADE ASC, FACTORIES.D_QTY DESC, FACTORIES.NAME ASC;

// factory 보고서를 표시하는데, D_QTY가 GRADE의 범위에 따라 O 또는 빈 문자열을 표시합니다.
// 결과는 GRADE, D_QTY 및 NAME 순으로 정렬되어야 합니다.