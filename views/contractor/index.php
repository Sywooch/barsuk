<?php

use yii\helpers\Html;
use yii\grid\GridView;
use yii\widgets\Pjax;
use yii\helpers\Url;
use yii\bootstrap\Modal;

/* @var $this yii\web\View */
/* @var $searchModel app\models\ContractorSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = Yii::t('app', 'Contractors');
$this->params['breadcrumbs'][] = $this->title;
?>
<?php

$this->registerJsFile(
    '@web/js/modal_js/modal_contractor.js',
    ['depends' => [\yii\web\JqueryAsset::className()],

    ]
);

?>

<div class="contractor-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::button(Yii::t('app', 'Create Contractor'), ['value' => Url::to('/contractor/create'), 'class' => 'btn btn-success', 'id' => 'modalButtonContractor']) ?>
    </p>

    <?php
    Modal::begin([
        'header' => '<h4>' . Yii::t('app', 'Contractor') . '</h4>',
        //   'footer' => '<div class="form-group"><div class="col-md-5 col-xs-10"></div></div>',


        'id' => 'modal-contractor',
        'size' => 'modal-lg',
        'toggleButton' => false,
        'clientOptions' => ['backdrop' => 'static', 'keyboard' => false],

    ]);

    echo "<div id='modalContentContractor'> </div>";
    Modal::end();
    ?>


    <?php Pjax::begin(['id' => 'pjax_contractor']); ?>    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'contractor_id',
            'name_ua',
            'name_en',
          //  'signature',

            [
                'attribute' => 'Печать',
                'format' => 'raw',
                'value' => function ($model) {
                    if ($model->signature != '')
                        //   return '<img src="/uploads/signatures/'.$model->signature.'" width="50px" height="auto">'; else return 'нет печати';
                        return '<div class="signature"  style="text-align:center;"><img src="/uploads/signatures/' . $model->signature . '" width="50px" height="auto">'; else return 'нет печати' . "</div>";


                },
            ],
            // 'created_at',
            // 'created_by',
            // 'contractor_type',

            ['class' => 'yii\grid\ActionColumn',
                /*'urlCreator'=>function ( $action,  $model,  $key,  $index,  $this) {
                return $key.'/'.$action;
                },*/
                'header' => 'Действия',
                'template' => '{update}{delete}',
                'buttons' => [
                    'update' => function ($url, $model) {
                        return Html::a('<span class="glyphicon glyphicon-pencil"></span>', $url, [
                            'title' => Yii::t('yii', 'Update'),
                            'class' => 'update_contractor',
                            'data-model-id' => $model->contractor_id,
                            'data-pjax' => 1,
                            // 'action' => $url,
                        ]);
                    },
                    'delete' => function ($url, $model) {
                        return Html::a('<span class="glyphicon glyphicon-trash"></span>', $url, [
                            'title' => Yii::t('yii', 'Delete'),
                            'class' => 'delete_contractor',
                            'data-model-id' => $model->contractor_id,
                            'data-pjax' => 1,
                        ]);
                    },

                    'delete' => function($url, $model){
                        return Html::a('<span class="glyphicon glyphicon-trash"></span>', ['delete', 'id' => $model->contractor_id], [
                            'class' => '',
                            'data' => [
                                'confirm' => 'Уверен в удалении записи? Можешь потеряь все данные !:)',
                                'method' => 'post',
                            ],
                        ]);
                    }

                ]
            ],
        ],
    ]); ?>
    <?php Pjax::end(); ?></div>
