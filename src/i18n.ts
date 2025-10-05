import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

const resources = {
  en: {
    translation: {
      brand: "BloomWatch",
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
          "BloomWatch is a strategic tool for public policy and environmental action. By providing precise, real-time data on blooming events, we support public health, sustainable agriculture, and biodiversity conservation, turning science into concrete decisions.",
        benefits: {
          monitoring: {
            title: "Real-time Monitoring",
            description:
              "Automatic bloom detection to anticipate environmental crises and support public policies to mitigate climate change.",
          },
          health: {
            title: "Public Health",
            description:
              "Alert system for sensitive populations, preventing pollen-related respiratory diseases and supporting strategic health decisions.",
          },
          agriculture: {
            title: "Sustainable Agriculture",
            description:
              "Geospatial data for responsible agricultural planning, resource optimization, and promotion of sustainable practices.",
          },
          research: {
            title: "Research and Conservation",
            description:
              "Historical database that supports biodiversity preservation policies and conservation strategies.",
          },
        },
        architectureTitle: "System Architecture",
        architectureDescription:
          "End-to-end pipeline for acquisition, processing, and visualization of geospatial data to support strategic decision-making.",
        details: {
          data: {
            title: "Data Acquisition",
            content:
              "Integration with multiple NASA satellites (MODIS, Landsat-8/9) to capture multispectral images. Spectral band processing (red, NIR) to compute vegetation indices with daily updates and global coverage.",
          },
          processing: {
            title: "Processing and Analysis",
            content:
              "Automated pipeline of geospatial data analysis using anomaly detection algorithms and machine learning. Identification of seasonal patterns and atypical bloom events to support public policy and scientific research.",
          },
          visualization: {
            title: "Visualization and Access",
            content:
              "Interactive web interface with dynamic maps to track bloom events at multiple scales. REST API for integration with external systems, enabling custom analyses and supporting strategic decision-making.",
          },
        },
      },
      team: {
        sectionTitle: "Our Team of Explorers",
        sectionParagraph:
          "Bringing together science, technology, and creativity to understand the pulse of life on Earth.",
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
          "O BloomWatch é uma ferramenta estratégica para políticas públicas e ações ambientais. Fornecendo dados precisos e em tempo real sobre eventos de floração, apoiamos saúde pública, agricultura sustentável e conservação da biodiversidade, transformando ciência em decisões concretas.",
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
              "Pipeline automatizado de análise de dados geoespaciais utilizando algoritmos de detecção de anomalias e machine learning. Identificação de padrões sazonais e eventos de floração atípicos para subsidiar políticas públicas e pesquisas científicas.",
          },
          visualization: {
            title: "Visualização e Acesso",
            content:
              "Interface web interativa com mapas dinâmicos para acompanhamento de eventos de floração em múltiplas escalas. API REST para integração com sistemas externos, permitindo análises customizadas e suporte à tomada de decisões estratégicas.",
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


