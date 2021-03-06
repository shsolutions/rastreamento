/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

//@require @packageOverrides
Ext.Loader.setConfig({

});

Ext.application({

    controllers: [
        'Principal',
        'Login',
        'Posicoes',
        'Mapa'
    ],
    name: 'ShSolutions',

    launch: function() {
        Ext.fly('appLoadingIndicator').destroy();
        Ext.create('ShSolutions.view.Principal', {fullscreen: true});

        var menu = Ext.create("Ext.Menu", {
            defaults: {
                xtype: "menubutton"
            },
            id: 'menu_sistema',
            width: '80%',
            scrollable: 'vertical',
            items: [
                {
                    text: 'Veículos',
                    iconCls: 'locate',
                    menu:"posicoeslist"
                },
                {
                    text: 'Sair',
                    iconCls: 'action',
                    menu:"login"
                }
            ]
        });
        
        Ext.Viewport.setMenu(menu, {
            side: 'left',
            reveal: true
        });
    }

});
