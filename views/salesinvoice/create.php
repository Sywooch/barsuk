<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model app\models\SalesInvoice */

$this->title = Yii::t('app', 'Create Sales Invoice');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Sales Invoices'), 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="sales-invoice-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
