import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

const resources = {
  en: {
    translation: {
      brand: "BloomPedia",
      nav: {
        home: "Home",
        about: "About",
        team: "Team",
        exploreMap: "Explore Map",
      },
      hero: {
        badge: "NASA Satellite Data",
        titleLine1: "Global Monitoring of",
        titleLine2: "Bloom Events",
        description:
          "Detection and visualization platform for blooming using NASA Earth Science Division satellite data",
        ctaExplore: "Explore Map",
      },
      about: {
        sectionTitle: "About the Project",
        sectionParagraph:
          "BloomPedia is an environmental monitoring tool that provides clear visualizations and real-time data on bloom events. With accurate information, we support public health, sustainable agriculture, and biodiversity conservation, transforming scientific monitoring into concrete and strategic actions.",
        benefits: {
          monitoring: {
            title: "Real-time Monitoring",
            description:
              "Automatic bloom detection to anticipate environmental crises and support public policies for climate change mitigation.",
          },
          health: {
            title: "Public Health",
            description:
              "Alert system for sensitive populations, preventing pollen-related respiratory diseases and supporting strategic health decisions.",
          },
          agriculture: {
            title: "Sustainable Agriculture",
            description:
              "Geospatial data for responsible agricultural planning, resource optimization, and the promotion of sustainable practices.",
          },
          research: {
            title: "Research and Conservation",
            description:
              "Historical database that supports biodiversity preservation policies and environmental conservation strategies.",
          },
        },
        architectureTitle: "System Architecture",
        architectureDescription:
          "Complete pipeline for acquisition, processing, and visualization of geospatial data to support strategic decision-making.",
        details: {
          data: {
            title: "Data Acquisition",
            content:
              "Integration with multiple NASA satellites (MODIS, Landsat-8/9) to capture multispectral images. Spectral band processing (red, NIR) to compute vegetation indices with daily updates and global coverage.",
          },
          processing: {
            title: "Processing and Analysis",
            content:
              "Frontend built with React and TypeScript for visualization and registration of areas and species. The Python backend manages data processing and database integration, ensuring real-time updates and supporting environmental analyses.",
          },
          visualization: {
            title: "Visualization and Access",
            content:
              "Interactive web interface with dynamic maps to track bloom events across multiple scales. FAST API for integration with external systems, enabling custom analyses and supporting strategic decision-making.",
          },
        },
      },
      team: {
        sectionTitle: "Our Team of Explorers",
        sectionParagraph:
          "Combining science, technology, and creativity to understand the pulse of life on Earth.",
        roles: {
          backendDev: "Backend Developer",
          frontendDev: "Frontend Developer",
        },
      },
      register: {
        headerTitle: "Observation Registry",
        headerSubtitle: "Bloom monitoring system",
        newObservation: "New Observation",
        registerData: "Register bloom data",
        location: "Location",
        latitude: "Latitude",
        longitude: "Longitude",
        elevation: "Elevation (m)",
        state: "State",
        speciesSection: "Species",
        genus: "Genus",
        species: "Species",
        commonName: "Common name",
        phenology: "Phenology",
        observationDate: "Observation date",
        phenophaseStatus: "Phenophase status",
        active: "Active",
        inactive: "Inactive",
        phenophaseDescription: "Phenophase description",
        intensityValue: "Intensity value",
        submit: "Register Observation",
        listTitle: "Registered Observations",
        listCount: "{{count}} records",
        noneTitle: "No observations registered",
        noneSubtitle: "Observations will appear here after registration",
        data: "Date:",
        place: "Place:",
        phenophase: "Phenophase:",
        intensity: "Intensity:",
        noCommonName: "No common name",
        notInformed: "Not informed",
      },
      area: {
        headerTitle: "Area Monitoring System",
        headerSubtitle: "Vegetation area registration",
        newArea: "New Monitoring Area",
        newAreaSubtitle: "Register a new area for observation",
        areaInfo: "Area Information",
        areaName: "Area name",
        description: "Area description",
        size: "Size (hectares)",
        vegetationType: "Vegetation type",
        location: "Location",
        city: "City",
        biome: "Biome",
        elevation: "Elevation (m)",
        statusConservation: "Status and Conservation",
        status: "Status",
        conservationStatus: "Conservation status",
        createdDate: "Created date",
        lastMonitoring: "Last monitoring date",
        imageOptional: "Area Image (Optional)",
        submit: "Register Area",
        listTitle: "Registered Areas",
        listCount: "{{count}} monitored areas",
        noneTitle: "No areas registered",
        noneSubtitle: "Areas will appear here after registration",
        sizeLabel: "Size:",
        biomeLabel: "Biome:",
        coordsLabel: "Coordinates:",
        conservationLabel: "Conservation status:",
        preserved: "Preserved",
        disturbed: "Disturbed",
        degraded: "Degraded",
        recovering: "Recovering",
      },
      chat: {
        assistant: "AI Assistant",
        subtitle: "Vegetation and Bloom Analysis",
        analyzedArea: "Analyzed Area",
        askPlaceholder: "Type your question about the local vegetation...",
        emptyPrompt:
          "Ask a question about vegetation, blooming, or satellite data for this area",
        analyzing: "Analyzing satellite data...",
        error:
          "Sorry, an error occurred while processing your question. Please try again.",
      },
      mapSidebar: {
        subtitle: "Blooming Events Monitoring",
        monitored: "Monitored",
        area: "Area",
        areasCount: "Areas Count",
        numberOfAreas: "Number of Areas",
        dateOfDetection: "Date of Detection",
        register: "Register",
        newPlant: "New Plant",
        newArea: "New Area",
        tools: "Tools",
        viewHistory: "View History",
        exportData: "Export Data",
      },
    },
  },
  "pt-BR": {
    translation: {
      brand: "BloomWatch",
      nav: {
        home: "Início",
        about: "Sobre",
        team: "Equipe",
        exploreMap: "Explorar Mapa",
      },
      hero: {
        badge: "Dados de Satélite NASA",
        titleLine1: "Monitoramento Global de",
        titleLine2: "Eventos de Floração",
        description:
          "Plataforma de detecção e visualização de floração utilizando dados de satélite da NASA Earth Science Division",
        ctaExplore: "Explorar Mapa",
      },
      about: {
        sectionTitle: "Sobre o Projeto",
        sectionParagraph:
          "O BloomWatch é uma ferramenta de monitoramento ambiental que oferece visualizações claras e dados em tempo real sobre eventos de floração. Com informações precisas, apoiamos a saúde pública, a agricultura sustentável e a conservação da biodiversidade, transformando o acompanhamento científico em ações concretas e estratégicas.",
        benefits: {
          monitoring: {
            title: "Monitoramento em Tempo Real",
            description:
              "Detecção automática de floração para antecipar crises ambientais e apoiar políticas públicas de mitigação de mudanças climáticas.",
          },
          health: {
            title: "Saúde Pública",
            description:
              "Sistema de alertas para populações sensíveis, prevenindo doenças respiratórias relacionadas ao pólen e apoiando decisões estratégicas de saúde.",
          },
          agriculture: {
            title: "Agricultura Sustentável",
            description:
              "Dados geoespaciais para planejamento agrícola responsável, otimização de recursos naturais e promoção de práticas agrícolas sustentáveis.",
          },
          research: {
            title: "Pesquisa e Conservação",
            description:
              "Base de dados histórica que subsidia políticas de preservação da biodiversidade e estratégias de conservação ambiental.",
          },
        },
        architectureTitle: "Arquitetura do Sistema",
        architectureDescription:
          "Pipeline completo de aquisição, processamento e visualização de dados geoespaciais para suporte à tomada de decisão estratégica.",
        details: {
          data: {
            title: "Aquisição de Dados",
            content:
              "Integração com múltiplos satélites da NASA (MODIS, Landsat-8/9) para captura de imagens multiespectrais. Processamento de bandas espectrais (vermelho, NIR) para cálculo de índices de vegetação com atualização diária e cobertura global.",
          },
          processing: {
            title: "Processamento e Análise",
            content:
              "Interface desenvolvida em React e TypeScript para visualização e cadastro de áreas e espécies. O backend em Python gerencia o processamento dos dados e a integração com o banco, garantindo atualização em tempo real e suporte às análises ambientais.",
          },
          visualization: {
            title: "Visualização e Acesso",
            content:
              "Interface web interativa com mapas dinâmicos para acompanhamento de eventos de floração em múltiplas escalas. FAST API para integração com sistemas externos, permitindo análises customizadas e suporte à tomada de decisões estratégicas.",
          },
        },
      },
      team: {
        sectionTitle: "Nossa Equipe de Exploradores",
        sectionParagraph:
          "Unindo ciência, tecnologia e criatividade para entender o pulso da vida no planeta Terra.",
        roles: {
          backendDev: "Desenvolvedor Backend",
          frontendDev: "Desenvolvedor Frontend",
        },
      },
      register: {
        headerTitle: "Registro de Observações",
        headerSubtitle: "Sistema de monitoramento de floração",
        newObservation: "Nova Observação",
        registerData: "Registre dados de floração",
        location: "Localização",
        latitude: "Latitude",
        longitude: "Longitude",
        elevation: "Elevação (m)",
        state: "Estado",
        speciesSection: "Espécie",
        genus: "Gênero",
        species: "Espécie",
        commonName: "Nome comum",
        phenology: "Fenologia",
        observationDate: "Data da observação",
        phenophaseStatus: "Status da fenofase",
        active: "Ativa",
        inactive: "Inativa",
        phenophaseDescription: "Descrição da fenofase",
        intensityValue: "Valor de intensidade",
        submit: "Registrar Observação",
        listTitle: "Observações Registradas",
        listCount: "{{count}} registros",
        noneTitle: "Nenhuma observação registrada",
        noneSubtitle: "As observações aparecerão aqui após o registro",
        data: "Data:",
        place: "Local:",
        phenophase: "Fenofase:",
        intensity: "Intensidade:",
        noCommonName: "Sem nome comum",
        notInformed: "Não informada",
      },
      area: {
        headerTitle: "Sistema de Monitoramento de Áreas",
        headerSubtitle: "Cadastro de áreas de vegetação",
        newArea: "Nova Área de Monitoramento",
        newAreaSubtitle: "Cadastre uma nova área para observação",
        areaInfo: "Informações da Área",
        areaName: "Nome da área",
        description: "Descrição da área",
        size: "Tamanho (hectares)",
        vegetationType: "Tipo de vegetação",
        location: "Localização",
        city: "Cidade",
        biome: "Bioma",
        elevation: "Elevação (m)",
        statusConservation: "Status e Conservação",
        status: "Status",
        conservationStatus: "Status de conservação",
        createdDate: "Data de criação",
        lastMonitoring: "Última data de monitoramento",
        imageOptional: "Imagem da Área (Opcional)",
        submit: "Cadastrar Área",
        listTitle: "Áreas Cadastradas",
        listCount: "{{count}} áreas monitoradas",
        noneTitle: "Nenhuma área cadastrada",
        noneSubtitle: "As áreas aparecerão aqui após o cadastro",
        sizeLabel: "Tamanho:",
        biomeLabel: "Bioma:",
        coordsLabel: "Coordenadas:",
        conservationLabel: "Status de conservação:",
        preserved: "Preservada",
        disturbed: "Perturbada",
        degraded: "Degradada",
        recovering: "Em recuperação",
      },
      chat: {
        assistant: "Assistente IA",
        subtitle: "Análise de Vegetação e Floração",
        analyzedArea: "Área Analisada",
        askPlaceholder: "Digite sua pergunta sobre a vegetação local...",
        emptyPrompt:
          "Faça uma pergunta sobre a vegetação, floração ou dados de satélite desta área",
        analyzing: "Analisando dados de satélite...",
        error:
          "Desculpe, ocorreu um erro ao processar sua pergunta. Por favor, tente novamente.",
      },
      mapSidebar: {
        subtitle: "Monitoramento de Eventos de Floração",
        monitored: "Monitorado",
        area: "Área",
        areasCount: "Contagem de Áreas",
        numberOfAreas: "Número de Áreas",
        dateOfDetection: "Data de Detecção",
        register: "Registrar",
        newPlant: "Nova Planta",
        newArea: "Nova Área",
        tools: "Ferramentas",
        viewHistory: "Ver Histórico",
        exportData: "Exportar Dados",
      },
    },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "pt-BR"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  })

export default i18n
