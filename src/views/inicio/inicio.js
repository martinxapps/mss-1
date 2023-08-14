import m from 'mithril';
import App from '../../models/App';

class MenuInicio {

    isContent = false;
    view() {
        return [
            m("li.bg-primary.wd-100p.nav-item.d-none",

                m(m.route.Link, { href: "/inicio", class: "nav-link" }, [
                    m("i[data-feather='layout']"),
                    " Inicio "
                ])


            ),

        ]
    }
}

class ModulesAccess {

    view() {

        if (_data !== null && _data.length !== 0) {

            return [

                Object.keys(_data.modulesAccess).map(function(_v, _i, _contentData) {

                    if (_data.modulesAccess[_v].length !== 0) {

                        MenuInicio.isContent = true;

                        return m(iMdodule, _data.modulesAccess[_v]);

                    }

                    if (Object.keys(_data.modulesAccess).length == (_i + 1)) {
                        if (!MenuInicio.isContent) {
                            return [
                                m("p.df-lead.pd-15",
                                    "Todavía no tienes acceso a ningún Módulo disponible. Comunícate a CONCAS Ext: 2020 y solicita activación. Att: Metrovirtual Plus."
                                )
                            ]
                        }

                    }




                })

            ]

        }



    }


}

const iMdodule = {
    view: (_data) => {
        if (_data.children[0].modulo !== undefined && _data.children[0].modulo == 'farmacia') {
            _data.children[0].modulo = 'Farmacia';
            _data.children[0].icon = "fas fa-pills";
            _data.children[0].href = 'farmacia';

        } else if (_data.children[0].modulo !== undefined && _data.children[0].modulo == 'laboratorio') {
            _data.children[0].modulo = 'Laboratorio';
            _data.children[0].icon = "fas fa-microscope";
            _data.children[0].href = 'laboratorio';
        } else if (_data.children[0].modulo !== undefined && _data.children[0].modulo == 'imagen') {
            _data.children[0].modulo = 'Imagen';
            _data.children[0].icon = "fas fa-file-prescription";
            _data.children[0].href = 'imagen';
        } else if (_data.children[0].modulo !== undefined && _data.children[0].modulo == 'emergencia') {
            _data.children[0].modulo = 'Emergencia';
            _data.children[0].icon = "fas fa-first-aid";
            _data.children[0].href = 'emergencia';
        } else if (_data.children[0].modulo !== undefined && _data.children[0].modulo == 'bco-sangre') {
            _data.children[0].icon = "fas fa-burn";
            _data.children[0].modulo = 'Bco. de Sangre';
            _data.children[0].href = 'bco-sangre';
        } else if (_data.children[0].modulo !== undefined && _data.children[0].modulo == 'terapia-respiratoria') {
            _data.children[0].icon = "fas fa-user-md";
            _data.children[0].modulo = 'Terapia Respiratoria';
            _data.children[0].href = 'terapia-respiratoria';
        } else if (_data.children[0].modulo !== undefined && _data.children[0].modulo == 'neurofisiologia') {
            _data.children[0].icon = "fas fa-user-md";
            _data.children[0].modulo = 'Neurofisiología';
            _data.children[0].href = 'neurofisiologia';
        } else if (_data.children[0].modulo !== undefined && _data.children[0].modulo == 'hospitalizacion') {
            _data.children[0].icon = "fas fa-procedures";
            _data.children[0].modulo = 'Hospitalizacion';
            _data.children[0].href = 'hospitalizacion';
        } else if (_data.children[0].modulo !== undefined && _data.children[0].modulo == 'admisiones') {
            _data.children[0].icon = "fas fa-folder-open";
            _data.children[0].modulo = 'Adimisones';
            _data.children[0].href = 'admisiones';
        } else if (_data.children[0].modulo !== undefined && _data.children[0].modulo == 'mantenimiento') {
            _data.children[0].icon = "fas fa-h-square ";
            _data.children[0].modulo = 'Mantenimento';
            _data.children[0].href = 'mantenimiento';
        } else if (_data.children[0].modulo !== undefined && _data.children[0].modulo == 'endoscopia') {
            _data.children[0].icon = "fas fa-compact-disc";
            _data.children[0].modulo = 'Endoscopìa';
            _data.children[0].href = 'endoscopia';
        } else if (_data.children[0].modulo !== undefined && _data.children[0].modulo == 'patologia') {
            _data.children[0].icon = "fas fa-microscope";
            _data.children[0].modulo = 'Patología';
            _data.children[0].href = 'patologia';
        } else if (_data.children[0].modulo !== undefined && _data.children[0].modulo == 'contabilidad') {
            _data.children[0].icon = "fas fa-book";
            _data.children[0].modulo = 'Contabilidad';
            _data.children[0].href = 'contabilidad';
        } else {
            _data.children[0].icon = "fas fa-hospital";
            _data.children[0].href = _data.children[0].modulo.charAt(0).toUpperCase();
            _data.children[0].modulo = _data.children[0].modulo.charAt(0).toUpperCase() + _data.children[0].modulo.slice(1)
        }

        return [
            m("li", {
                "class": "list-item bg-white wd-50p",
                "style": { "cursor": "pointer" },
                onclick: () => {

                    m.route.set(_data.children[0].href, {});


                }
            }, [
                m("div", { "class": "media" }, [
                    m("div.wd-60.tx-center", { "class": "pd-10 bg-litecoin" },
                        m("i", { "class": _data.children[0].icon + " tx-30 tx-white" })
                    ),
                    m("div", { "class": "media-body mg-l-15" }, [
                        m("p", { "class": "tx-18 mg-b-0" },
                            _data.children[0].modulo
                        ),
                        m("p", { "class": "mg-b-0 tx-11 tx-color-03 tx-medium tx-spacing-1 tx-sans" },
                            "Ir a " + _data.children[0].modulo
                        )
                    ])
                ]),

            ])

        ]
    }
};


class Inicio extends App {
    constructor() {
        super();
        this.isAuthenticated();
        this.title = "Inicio";
    }
    view() {
        return [
            m("header.navbar.navbar-header.navbar-header-fixed", [

                m("div.navbar-brand",
                    m(m.route.Link, { href: "/", class: "df-logo" }, [
                        "Metro",
                        m("span",
                            "Plus+"
                        ),

                    ]),


                ),
                m(".navbar-menu-wrapper[id='navbarMenu']", [
                    m("div.navbar-menu-header", [
                        m(m.route.Link, { href: "/", class: "df-logo" }, [
                            "Metro",
                            m("span",
                                "Plus+"
                            ),

                        ]),
                        m("a[id='mainMenuClose'][href='']",
                            m("i[data-feather='x']")
                        )
                    ]),
                    m("ul.nav.navbar-menu", [
                        m("li.nav-label.pd-l-20.pd-lg-l-25.d-lg-none",
                            "Menu"
                        ),
                        //  m(MenuInicio),

                    ])
                ]),
                // m(SidebarRight)
            ]),
            m("div.content.content-components", {

                },
                m("div.container.mg-l-0.mg-r-0", {
                    style: { "max-width": "100%" }
                }, [
                    m("ol.breadcrumb.df-breadcrumbs", [
                        m("li.breadcrumb-item",
                            m(m.route.Link, { href: "/", }, [
                                "MetroPlus"

                            ]),

                        ),
                        m("li.breadcrumb-item.active[aria-current='page']",
                            "Inicio"
                        )
                    ]),
                    m("h1.df-title.mg-t-20.mg-b-10",
                        "Inicio:"
                    ),

                    m("div.row.tx-14", [

                        //m(ModulesAccess),


                    ]),

                ])
            ),
        ];

    }
}


export default Inicio;