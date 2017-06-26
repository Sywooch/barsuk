<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model app\models\Contractor */

// $this->title = Yii::t('app', 'Create Contractor');
$this->params['breadcrumbs'][] = ['label' => Yii::t('app', 'Contractors'), 'url' => ['index']];

?>
<div class="contractor-create">

    <h1><?php /*= Html::encode($this->title) */?></h1>

    <?= $this->render('_form', [
        'model_contr' => $model_contr,
        'model_contr_info' =>$model_contr_info,
        'model_media' => $model_media,
    ]) ?>

</div>
