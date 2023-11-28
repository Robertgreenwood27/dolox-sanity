// schema.js

export default {
  name: 'assistant',
  type: 'document',
  fields: [
          {
            name: 'name',
            type: 'string',
            title: 'Name',
          },
          {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
              source: 'name',
              slugify: (input) => input
                                  .toLowerCase()
                                  .replace(/\s+/g, '-')
                                  .slice(0, 200),
            },
          },
          {
            name: 'photo',
            type: 'image',
            title: 'Photo',
            options: {
              hotspot: true,  // Enables the hotspot feature
            },
          },
          {
            name: 'systemPrompt',
            type: 'text',
            title: 'System Prompt',
            description: 'Enter the system prompt for the assistant', // Optional description
          },
          {
            name: 'voice',
            type: 'string',
            title: 'voice',
          },
        ],
      };
      
  
