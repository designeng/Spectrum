define({
    shapeCollection: {
        create: {
            module: 'source/modules/shapeModule/models/shapeCollection'
        },
        ready: {
            addCircle: {$ref: 'modeldata.rino'}
        }
    },
    model: {
        create: {
            module: 'source/modules/shapeModule/models/circleModel',
            args: [
                {$ref: 'modeldata.rino'}
            ]
        }
    },
    shapeService: {
        create: {
            module: 'source/modules/shapeModule/services/shapeService',
            args: [
                {$ref: 'shapeCollection'},
                {$ref: 'test'}
            ]
        }
    },
    test: {
        create: {
            module: 'source/common/infrastructure/test'
        }
    },
    view: {
        create: {
            module: 'source/modules/shapeModule/views/circleView',
            args: [
                {$ref: 'model'},
                {$ref: 'myReferenceData'}
            ]
        },
        ready: {
            show: ''
        }
    },
    modeldata: {
        rino: ['PHP', 'JavaScript', 'C#']
    },
    myReferenceData: {
	list : {$ref: 'dom.first!section'}, 
        addButton : {$ref: 'dom.first!section'}, 
        delButton : {$ref: 'dom.first!section'}
    },
    plugins: [
        {
            module: 'wire/debug', 
            trace: {pointcut: /^((?!(model$|constructor$|_)).*)$/}
        },
        {
            module: 'wire/dom', 
            classes: {init: 'loading'}
        },
        {module: 'wire/domReady'},
        {module: 'wire/dom/render'}
    ]
});